import React, {useEffect, useState} from 'react';
import DeadlineComponentView from "./DeadlineComponentView";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {fetchDeadlinesAction, saveDeadlinesAction} from "../../../redux/actions/deadlineActions";
import {DeadlineB, DeadlineF} from "../../../declarations/types";
import moment, {Moment} from "moment";
import {useSnackbar} from "../../../utils/useSnackbar";

const DeadlineComponentContainer: React.FC = () => {

    const {deadlines, loading, error, errorResponse} = useSelector((state: RootState) => state.deadline);
    const {authToken} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const snackbar = useSnackbar();

    useEffect(() => {
        fetchDeadlinesAction(authToken, dispatch);
    }, []);

    const [deadlineFields, setDeadlineFields] = useState<DeadlineF[]>([]);

    useEffect(() => {
        if (deadlines) {
            setDeadlineFields((deadlines as DeadlineB[]).map(ddl => ({
                ...ddl,
                deadlineDate: moment(ddl.deadlineDate)
            })));
        }
    }, [deadlines])

    const handleDateChange = (date: Moment, orderNumber: number): void => {
        setDeadlineFields(prevDeadlines => prevDeadlines
            .map(
                deadline => deadline.orderNumber === orderNumber ? {...deadline, deadlineDate: date} : deadline
            ).sort(
                (a, b) =>
                    a.deadlineDate.valueOf() - b.deadlineDate.valueOf())
            .map(
                (deadline, index) => ({...deadline, orderNumber: index + 1})
            )
        );
    };

    const initializeDeadlines = (): void => {
        setDeadlineFields([{
            activity: 'FILL_COMPANY_DATA',
            deadlineDate: moment().add(1, 'days'),
            orderNumber: 1
        }, {
            activity: 'CHOOSE_SPONSORSHIP_PACKAGE',
            deadlineDate: moment().add(2, 'days'),
            orderNumber: 2
        }, {
            activity: 'CHOOSE_ADDITIONAL_EQUIPMENT',
            deadlineDate: moment().add(3, 'days'),
            orderNumber: 3
        }, {
            activity: 'FILL_CATALOGUE_INFORMATION',
            deadlineDate: moment().add(4, 'days'),
            orderNumber: 4
        }, {
            activity: 'SIGN_THE_CONTRACT',
            deadlineDate: moment().add(5, 'days'),
            orderNumber: 5
        }])

    }

    const handleSave = (): void => {
        const body = {
            deadlines: deadlineFields.map(ddl => ({...ddl, deadlineDate: ddl.deadlineDate.toISOString()})),
            count: deadlineFields.length
        }

        saveDeadlinesAction(body, authToken, dispatch, snackbar);
    }


    return (
        <DeadlineComponentView loading={loading}
                               error={error}
                               errorResponse={errorResponse}
                               deadlineFields={deadlineFields}
                               handleSave={handleSave}
                               initializeDeadlines={initializeDeadlines}
                               handleDateChange={handleDateChange}
        />
    );
};


export default DeadlineComponentContainer;
