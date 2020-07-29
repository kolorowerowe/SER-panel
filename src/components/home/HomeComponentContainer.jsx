import React from 'react';
import HomeComponentView from "./HomeComponentView";
import {useSelector} from "react-redux";

const HomeComponentContainer = () => {

    const activeUser = useSelector(state => state.activeUser);
    const {isOrganizer, isCompany} = useSelector(state => state.auth);

    const {
        user,
        error,
        errorResponse,
        loading,
    } = activeUser;



    return (
        <HomeComponentView user={user}
                           error={error}
                           errorResponse={errorResponse}
                           loading={loading}
                           isOrganizer={isOrganizer}
                           isCompany={isCompany}/>
    );
};


export default HomeComponentContainer;
