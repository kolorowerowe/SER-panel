import React, {useEffect} from 'react';
import LoginComponentView from "./LoginComponentView";
import {useDispatch, useSelector} from "react-redux";
import {checkSavedToken, loginAction} from "../../../redux/actions/authActions";
import useFieldValidation from "../../../utils/useFieldValidation";
import {validateEmail, validatePassword} from "../../../utils/Validators";
import {useLocation, useNavigate} from "react-router";

const LoginComponentContainer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location.state || {pathname: '/'};

    const emailField = useFieldValidation('', validateEmail);
    const passwordField = useFieldValidation('', validatePassword);

    const {isLoggedIn, error, errorResponse, loading} = useSelector(state => state.auth)

    const handleRedirectLoggedInUser = () => {
        navigate(pathname);
    }

    useEffect(()=>{
        const savedToken = localStorage.getItem("accessToken");
        if (!!savedToken && savedToken !== ""){
            checkSavedToken(savedToken, dispatch);
        }
    }, [])

    useEffect(() => {
        if (isLoggedIn) {
            handleRedirectLoggedInUser()
        }
    }, [isLoggedIn])



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
