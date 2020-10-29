import React, {useEffect} from 'react';
import HomeComponentView from "./HomeComponentView";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompaniesForUserAction} from "../../redux/actions/companiesActions";
import {EVENT_DATE_TIME} from "../../utils/constans";
import {useCountdownHook} from "../../utils/DateTimeUtils";
import {RootState} from "../../redux/store";
import {fetchStatisticsAction} from "../../redux/actions/statisticsActions";

const HomeComponentContainer: React.FC = () => {

    const activeUser = useSelector((state: RootState) => state.activeUser);
    const {isOrganizer, isCompany, isAdmin, authToken} = useSelector((state: RootState) => state.auth);
    const companies = useSelector((state: RootState) => state.companies);
    const {statistics} = useSelector((state: RootState) => state.statistics);

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



    const {timeLeft} = useCountdownHook(EVENT_DATE_TIME);

    return (
        <HomeComponentView activeUser={activeUser}
                           isAdmin={isAdmin}
                           isOrganizer={isOrganizer}
                           isCompany={isCompany}
                           companies={companies}
                           statistics={statistics}
                           timeLeftToEvent={timeLeft}/>
    );
};


export default HomeComponentContainer;
