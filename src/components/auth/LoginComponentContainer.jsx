import React, {useEffect} from 'react';
import LoginComponentView from "./LoginComponentView";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../redux/actions/authActions";
import useFieldValidation from "../../utils/useFieldValidation";
import {validateEmail, validatePassword} from "../../utils/Validators";
import {useHistory} from "react-router";

const LoginComponentContainer = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const emailField = useFieldValidation('', validateEmail);
    const passwordField = useFieldValidation('', validatePassword);

    const {isLoggedIn, error, errorResponse} = useSelector(state => state.auth)

    useEffect(() => {
        if (isLoggedIn) {
            handleRedirectLoggedInUser()
        }
    }, [isLoggedIn])

    const handleRedirectLoggedInUser = () => {
        history.push('/')
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

                            error={error}
                            errorResponse={errorResponse}/>
    );
};


export default LoginComponentContainer;
