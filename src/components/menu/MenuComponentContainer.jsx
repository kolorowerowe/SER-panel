import React from 'react';
import MenuComponentView from "./MenuComponentView";
import {useSelector} from "react-redux";

const MenuComponentContainer = () => {

    const user = useSelector(state => state.activeUser)

    const {
        response,
        error,
        loading
    } = user;

    return (
        <MenuComponentView response={response}/>
    );
};


export default MenuComponentContainer;
