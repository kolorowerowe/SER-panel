import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useFieldValidation from "../../../utils/useFieldValidation";
import {validateEmail,} from "../../../utils/Validators";
import {useNavigate} from "react-router";
import ActivateAccountComponentView from "./ActivateAccountComponentView";
import {sendVerificationCodeAction} from "../../../redux/actions/activateUserProcessActions";

const ActivateAccountComponentContainer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailField = useFieldValidation('', validateEmail);
    const [checkedInformationAboutDataProcessing, setCheckedInformationAboutDataProcessing] = useState(false);
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
        navigate('/');
    }

    const handleRedirectPassVerificationCode = () => {
        navigate('/activate/verify');
    }

    const onSendVerificationCodeSubmit = (event) => {
        event.preventDefault();

        if (emailField.validate() == null && checkedInformationAboutDataProcessing){
            sendVerificationCodeAction(emailField.value, dispatch);
        }
    }
    return (
        <ActivateAccountComponentView emailField={emailField}
                                      checkedInformationAboutDataProcessing={checkedInformationAboutDataProcessing}
                                      setCheckedInformationAboutDataProcessing={setCheckedInformationAboutDataProcessing}
                                      onSendVerificationCodeSubmit={onSendVerificationCodeSubmit}

                                      loading={loading}
                                      error={error}
                                      errorResponse={errorResponse}/>
    );
};


export default ActivateAccountComponentContainer;
