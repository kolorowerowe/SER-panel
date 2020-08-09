import React, {useEffect} from 'react';
import HomeComponentView from "./HomeComponentView";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompaniesForUserAction} from "../../redux/actions/companiesActions";

const HomeComponentContainer = () => {

    const activeUser = useSelector(state => state.activeUser);
    const {isOrganizer, isCompany, authToken} = useSelector(state => state.auth);
    const companies = useSelector(state => state.companies);

    const dispatch = useDispatch();

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

    return (
        <HomeComponentView activeUser={activeUser}
                           companies={companies}
                           isOrganizer={isOrganizer}
                           isCompany={isCompany}/>
    );
};


export default HomeComponentContainer;
