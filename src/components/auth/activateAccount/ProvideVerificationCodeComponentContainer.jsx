import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useFieldValidation from "../../../utils/useFieldValidation";
import {validateVerificationCode,} from "../../../utils/Validators";
import {useNavigate} from "react-router";
import {verifyCodeAction} from "../../../redux/actions/activateUserProcessActions";
import ProvideVerificationCodeComponentView from "./ProvideVerificationCodeComponentView";

const ProvideVerificationCodeComponentContainer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const verificationCodeField = useFieldValidation('', validateVerificationCode);

    const {isLoggedIn} = useSelector(state => state.auth)
    const {sentVerificationCode, email, verifiedCode, loading, error, errorResponse} = useSelector(state => state.activateUserProcess)

    useEffect(() => {
        if (isLoggedIn) {
            handleRedirectLoggedInUser()
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (verifiedCode) {
            handleRedirectVerifyCode()
        }
    }, [verifiedCode])

    useEffect(() => {
        if (sentVerificationCode === false) {
            handleRedirectBack()
        }
    }, [sentVerificationCode])


    const handleRedirectLoggedInUser = () => {
        navigate('/')
    }

    const handleRedirectBack = () => {
        navigate('/activate/email')
    }

    const handleRedirectVerifyCode = () => {
        navigate('/activate/password')
    }

    const onVerifyCodeSubmit = (event) => {
        event.preventDefault();

        if (verificationCodeField.validate() == null) {
            verifyCodeAction(email, verificationCodeField.value, dispatch);
        }
    }
    return (
        <ProvideVerificationCodeComponentView verificationCodeField={verificationCodeField}
                                              onVerifyCodeSubmit={onVerifyCodeSubmit}
                                              email={email}
                                              loading={loading}
                                              error={error}
                                              errorResponse={errorResponse}/>
    );
};


export default ProvideVerificationCodeComponentContainer;
