import React from 'react';
import MenuComponentView from "./MenuComponentView";
import {useSelector} from "react-redux";

const MenuComponentContainer = () => {

    const activeUser = useSelector(state => state.activeUser)

    const {
        user,
        error,
        loading
    } = activeUser;

    return (
        <MenuComponentView user={user}/>
    );
};


export default MenuComponentContainer;
