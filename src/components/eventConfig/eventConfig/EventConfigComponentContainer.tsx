import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import moment, {Moment} from "moment";
import {useSnackbar} from "../../../utils/useSnackbar";
import {fetchEventConfigAction, saveEventConfigAction} from "../../../redux/actions/eventConfigActions";
import EventConfigComponentView from "./EventConfigComponentView";
import useFieldValidation from "../../../utils/useFieldValidation";
import {validateEventName} from "../../../utils/Validators";

const EventConfigComponentContainer: React.FC = () => {

    const {
        eventConfig,
        loading,
        error,
        errorResponse
    } = useSelector((state: RootState) => state.eventConfig);

    const {authToken} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const snackbar = useSnackbar();

    useEffect(() => {
        dispatch(fetchEventConfigAction())
    }, [dispatch]);

    const [eventDate, setEventDate] = useState<string>('');
    const eventNamePlField = useFieldValidation('', validateEventName);
    const eventNameEnField = useFieldValidation('', validateEventName);

    useEffect(() => {
        if (!!eventConfig) {

            const {
                eventDate: eventDateResponse = '',
                eventNamePl = '',
                eventNameEn = ''
            } = eventConfig;

            setEventDate(eventDateResponse);
            eventNamePlField.setValue(eventNamePl);
            eventNameEnField.setValue(eventNameEn);
        }
    }, [eventConfig]);


    const handleSave = (): void => {

        const validationError = eventNamePlField.validate() || eventNameEnField.validate();
        if (!!validationError){
            return;
        }

        const body = {
            eventDate: eventDate,
            eventNamePl: eventNamePlField.value,
            eventNameEn: eventNameEnField.value
        }

        saveEventConfigAction(body, authToken, dispatch, snackbar);
    }

    const onEventDateChange = (date: Moment | null): void => {
        if (date === null) {
            setEventDate(moment().toISOString());
        } else {
            setEventDate(date.toISOString());
        }
    }

    const initializeEventDate = () => {
        setEventDate(moment().toISOString());
    }


    return (
        <EventConfigComponentView loading={loading}
                                  error={error}
                                  errorResponse={errorResponse}
                                  eventDate={eventDate}
                                  initializeEventDate={initializeEventDate}
                                  onEventDateChange={onEventDateChange}
                                  eventNamePlField={eventNamePlField}
                                  eventNameEnField={eventNameEnField}
                                  handleSave={handleSave}
        />
    );
};


export default EventConfigComponentContainer;
