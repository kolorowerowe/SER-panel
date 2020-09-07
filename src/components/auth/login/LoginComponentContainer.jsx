import React, {useEffect} from 'react';
import LoginComponentView from "./LoginComponentView";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../../redux/actions/authActions";
import useFieldValidation from "../../../utils/useFieldValidation";
import {validateEmail, validatePassword} from "../../../utils/Validators";
import {useNavigate} from "react-router";

const LoginComponentContainer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailField = useFieldValidation('', validateEmail);
    const passwordField = useFieldValidation('', validatePassword);

    const {isLoggedIn, error, errorResponse, loading} = useSelector(state => state.auth)

    useEffect(() => {
        if (isLoggedIn) {
            handleRedirectLoggedInUser()
        }
    }, [isLoggedIn])

    const handleRedirectLoggedInUser = () => {
        navigate('/')
    }

    const onLoginSubmit = (event) => {
        event.preventDefault();

        const loginBody = {
            email: emailField.value,
            password: passwordField.value
        }

        loginAction(loginBody, dispatch);
    }
    return (
        <LoginComponentView emailField={emailField}
                            passwordField={passwordField}
                            onLoginSubmit={onLoginSubmit}

                            loading={loading}
                            error={error}
                            errorResponse={errorResponse}/>
    );
};


export default LoginComponentContainer;
