import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import moment, {Moment} from "moment";
import {useSnackbar} from "../../../utils/useSnackbar";
import {fetchEventConfigAction, saveEventConfigAction} from "../../../redux/actions/eventConfigActions";
import EventConfigComponentView from "./EventConfigComponentView";
import {matchErrorCode} from "../../../utils/ErrorUtils";

const EventConfigComponentContainer: React.FC = () => {

    const {
        eventConfig: {
            eventDate: eventDateResponse = ''
        } = {},
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

    useEffect(() => {
        if (!!eventDateResponse) {
            setEventDate(eventDateResponse);
        }
    }, [eventDateResponse]);



    const handleSave = (): void => {
        const body = {
            eventDate: eventDate
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
                                  handleSave={handleSave}
        />
    );
};


export default EventConfigComponentContainer;
