import {
    SEND_VERIFICATION_CODE,
    SEND_VERIFICATION_CODE_FAILURE,
    SEND_VERIFICATION_CODE_SUCCESS,
    SETUP_PASSWORD,
    SETUP_PASSWORD_FAILURE,
    SETUP_PASSWORD_SUCCESS,
    VERIFY_CODE,
    VERIFY_CODE_FAILURE,
    VERIFY_CODE_SUCCESS
} from "../types/activateUserProcessTypes";
import axios from "axios";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const sendVerificationCodeAction = (email, dispatch) => {
    dispatch({
        type: SEND_VERIFICATION_CODE,
        payload: email
    });

    axios.get(`${baseUrl}/user/verify/request`, {
        params: {
            email
        }
    })
        .then(({data}) => {
            dispatch({
                type: SEND_VERIFICATION_CODE_SUCCESS,
            });
        })
        .catch(err => {
            dispatch({
                type: SEND_VERIFICATION_CODE_FAILURE,
                payload: err
            });
        });
};

export const verifyCodeAction = (email, code, dispatch) => {
    dispatch({
        type: VERIFY_CODE,
    });

    axios.get(`${baseUrl}/user/verify/check`, {
        params: {
            email,
            code
        }
    })
        .then(({data}) => {
            dispatch({
                type: VERIFY_CODE_SUCCESS,
                authToken: data.authToken,
                userId: data.user.id
            });
        })
        .catch(err => {
            dispatch({
                type: VERIFY_CODE_FAILURE,
                payload: err
            });
        });
};

export const setupNewPasswordAction = (userId, passwordBody, authToken, dispatch) => {
    dispatch({
        type: SETUP_PASSWORD,
    });

    axios.post(`${baseUrl}/user/${userId}/password/set`, passwordBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: SETUP_PASSWORD_SUCCESS
            });
        })
        .catch(err => {
            dispatch({
                type: SETUP_PASSWORD_FAILURE,
                payload: err
            });
        });
};
