import React, {useEffect} from 'react';
import HomeComponentView from "./HomeComponentView";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompaniesForUserAction} from "../../redux/actions/companiesActions";
import {EVENT_DATE_TIME} from "../../utils/constans";
import {useCountdownHook} from "../../utils/DateTimeUtils";
import {RootState} from "../../redux/store";

const HomeComponentContainer: React.FC = () => {

    const activeUser = useSelector((state: RootState) => state.activeUser);
    const {isOrganizer, isCompany, authToken} = useSelector((state: RootState) => state.auth);
    const companies = useSelector((state: RootState) => state.companies);

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

    const {timeLeft} = useCountdownHook(EVENT_DATE_TIME);

    return (
        <HomeComponentView activeUser={activeUser}
                           companies={companies}
                           isOrganizer={isOrganizer}
                           isCompany={isCompany}
                           timeLeftToEvent={timeLeft}/>
    );
};


export default HomeComponentContainer;
