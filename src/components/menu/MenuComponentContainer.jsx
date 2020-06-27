import React, {useEffect} from 'react';
import MenuComponentView from "./MenuComponentView";
import {fetchGreetingAction} from "../../redux/actions/generalActions";
import {useDispatch, useSelector} from "react-redux";

const MenuComponentContainer = () => {

    const dispatch = useDispatch();
    const greeting = useSelector(state => state.greeting)

    const {
        response,
        error,
        loading
    } = greeting || {};

    useEffect(()=>{
        fetchGreetingAction(dispatch);
    }, [])

    return (
        <MenuComponentView response={response}/>
    );
};


export default MenuComponentContainer;
