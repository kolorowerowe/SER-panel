import React from 'react';
import HomeComponentView from "./HomeComponentView";
import {useSelector} from "react-redux";

const HomeComponentContainer = () => {

    const activeUser = useSelector(state => state.activeUser)

    const {
        user,
        error,
        errorResponse,
        loading
    } = activeUser;

    return (
        <HomeComponentView user={user}
                           error={error}
                           errorResponse={errorResponse}
                           loading={loading}/>
    );
};


export default HomeComponentContainer;
