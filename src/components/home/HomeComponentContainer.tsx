import React, {useEffect} from 'react';
import HomeComponentView from "./HomeComponentView";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompaniesForUserAction} from "../../redux/actions/companiesActions";
import {EVENT_DATE_TIME} from "../../utils/constans";
import {useCountdownHook} from "../../utils/DateTimeUtils";
import {RootState} from "../../redux/store";
import {fetchStatisticsAction} from "../../redux/actions/statisticsActions";
import {fetchEventConfigAction} from "../../redux/actions/eventConfigActions";

const HomeComponentContainer: React.FC = () => {

    const activeUser = useSelector((state: RootState) => state.activeUser);
    const {isOrganizer, isCompany, isAdmin, authToken} = useSelector((state: RootState) => state.auth);
    const companies = useSelector((state: RootState) => state.companies);
    const {
        statistics,
        loading: statisticsLoading,
        error: statisticsError,
        errorResponse: statisticsErrorResponse
    } = useSelector((state: RootState) => state.statistics);
    const {
        eventConfig: {
            eventDate = '',
            eventNamePl = '',
            eventNameEn = ''
        } = {},
        loading: eventConfigLoading,
        error: eventConfigError,
        errorResponse: eventConfigErrorResponse
    } = useSelector((state: RootState) => state.eventConfig)

    const dispatch = useDispatch();

    const {
        user: {
            id: userId,
            companyAccessList
        } = {}
    } = activeUser;

    useEffect(() => {
        if (userId) {
            fetchCompaniesForUserAction(userId, authToken, dispatch);
        }
    }, [userId, companyAccessList]);

    useEffect(() => {
        dispatch(fetchStatisticsAction())
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchEventConfigAction())
    }, [dispatch]);



    const {timeLeft} = useCountdownHook(eventDate);

    return (
        <HomeComponentView activeUser={activeUser}
                           isAdmin={isAdmin}
                           isOrganizer={isOrganizer}
                           isCompany={isCompany}
                           companies={companies}
                           statistics={statistics}
                           statisticsLoading={statisticsLoading}
                           statisticsError={statisticsError}
                           statisticsErrorResponse={statisticsErrorResponse}
                           timeLeftToEvent={timeLeft}
                           eventNamePl={eventNamePl}
                           eventNameEn={eventNameEn}
                           eventConfigLoading={eventConfigLoading}
                           eventConfigError={eventConfigError}
                           eventConfigErrorResponse={eventConfigErrorResponse}/>
    );
};


export default HomeComponentContainer;
