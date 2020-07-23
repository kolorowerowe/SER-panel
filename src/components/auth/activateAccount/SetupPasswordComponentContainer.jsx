import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useFieldValidation from "../../../utils/useFieldValidation";
import {validatePassword,} from "../../../utils/Validators";
import {useHistory} from "react-router";
import {setupNewPasswordAction} from "../../../redux/actions/activateUserProcessActions";
import SetupPasswordComponentView from "./SetupPasswordComponentView";

const SetupPasswordComponentContainer = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const passwordField = useFieldValidation('', validatePassword);
    const repeatPasswordField = useFieldValidation('', validatePassword);


    const {isLoggedIn} = useSelector(state => state.auth)
    const {verifiedCode, setupNewPassword, userId, tempAuthToken, loading, error, errorResponse} = useSelector(state => state.activateUserProcess)

    useEffect(() => {
        if (isLoggedIn) {
            handleRedirectLoggedInUser()
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (verifiedCode === false) {
            handleRedirectBack()
        }
    }, [verifiedCode])

    useEffect(() => {
        if (setupNewPassword) {
            handleRedirectActivationDone()
        }
    }, [setupNewPassword])

    const handleRedirectLoggedInUser = () => {
        history.push('/')
    }

    const handleRedirectBack = () => {
        history.push('/activate/email')
    }

    const handleRedirectActivationDone = () => {
        history.push('/activate/done')
    }

    const onSetupPasswordSubmit = (event) => {
        event.preventDefault();

        if (passwordField.validate() == null && repeatPasswordField.validate() == null) {

            const passwordBody = {
                newPassword: passwordField.value,
                repeatNewPassword: repeatPasswordField.value
            }

            setupNewPasswordAction(userId, passwordBody, tempAuthToken, dispatch);
        }
    }
    return (
        <SetupPasswordComponentView passwordField={passwordField}
                                    repeatPasswordField={repeatPasswordField}
                                    onSetupPasswordSubmit={onSetupPasswordSubmit}

                                    loading={loading}
                                    error={error}
                                    errorResponse={errorResponse}/>
    );
};


export default SetupPasswordComponentContainer;
