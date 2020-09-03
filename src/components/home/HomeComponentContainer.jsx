import React, {useEffect, useState} from 'react';
import HomeComponentView from "./HomeComponentView";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompaniesForUserAction} from "../../redux/actions/companiesActions";
import moment from "moment";
import {EVENT_DATE_TIME} from "../../utils/constans";
import {formatCountDown} from "../../utils/DateTimeUtils";

const HomeComponentContainer = () => {

    const activeUser = useSelector(state => state.activeUser);
    const {isOrganizer, isCompany, authToken} = useSelector(state => state.auth);
    const companies = useSelector(state => state.companies);

    const dispatch = useDispatch();

    const [timeLeftToEvent, setTimeLeftToEvent] = useState('')

    const {
        user: {
            id: userId,
            companyAccessList
        } = {}
    } = activeUser;

    useEffect(() => {
        if (!!userId) {
            fetchCompaniesForUserAction(userId, authToken, dispatch);
        }
    }, [userId, companyAccessList]);

    useEffect(() => {
        const eventDateTime = moment(EVENT_DATE_TIME).valueOf();

        const interval = setInterval(() => {
            const currentTime = moment().valueOf();
            const diffTimeSeconds = eventDateTime - currentTime;
            const duration = moment.duration(diffTimeSeconds, 'milliseconds');

            setTimeLeftToEvent(formatCountDown(duration))
        }, 1000);

        return () => clearInterval(interval);


    }, [])


    return (
        <HomeComponentView activeUser={activeUser}
                           companies={companies}
                           isOrganizer={isOrganizer}
                           isCompany={isCompany}
                           timeLeftToEvent={timeLeftToEvent}/>
    );
};


export default HomeComponentContainer;
