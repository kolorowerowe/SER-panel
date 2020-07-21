import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useFieldValidation from "../../../utils/useFieldValidation";
import {validateEmail,} from "../../../utils/Validators";
import {useHistory} from "react-router";
import ActivateAccountComponentView from "./ActivateAccountComponentView";
import {sendVerificationCodeAction} from "../../../redux/actions/activateUserProcessActions";

const ActivateAccountComponentContainer = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const emailField = useFieldValidation('', validateEmail);

    const {isLoggedIn} = useSelector(state => state.auth)
    const {sentVerificationCode, loading, error, errorResponse} = useSelector(state => state.activateUserProcess)

    useEffect(() => {
        if (isLoggedIn) {
            handleRedirectLoggedInUser()
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (sentVerificationCode) {
            handleRedirectPassVerificationCode()
        }
    }, [sentVerificationCode])

    const handleRedirectLoggedInUser = () => {
        history.push('/')
    }

    const handleRedirectPassVerificationCode = () => {
        history.push('/activate/verify')
    }

    const onSendVerificationCodeSubmit = (event) => {
        event.preventDefault();

        if (emailField.validate() == null){
            sendVerificationCodeAction(emailField.value, dispatch);
        }
    }
    return (
        <ActivateAccountComponentView emailField={emailField}
                                      onSendVerificationCodeSubmit={onSendVerificationCodeSubmit}

                                      loading={loading}
                                      error={error}
                                      errorResponse={errorResponse}/>
    );
};


export default ActivateAccountComponentContainer;
