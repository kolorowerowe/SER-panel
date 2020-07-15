import {
    ATTEMPT_LOGIN,
    ATTEMPT_LOGIN_FAILURE,
    ATTEMPT_LOGIN_SUCCESS,
    DECODE_TOKEN,
    DECODE_TOKEN_FAILURE,
    DECODE_TOKEN_SUCCESS,
    LOGOUT
} from "../types/authTypes";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {fetchActiveUserAction} from "./activeUserActions";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const loginAction = ({email, password}, dispatch) => {
    dispatch({type: ATTEMPT_LOGIN});

    let formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);


    axios.post(`${baseUrl}/user/login`, formData)
        .then(({data}) => {
            dispatch({
                type: ATTEMPT_LOGIN_SUCCESS,
                payload: data.authToken
            });
            decodeTokenAction(data.authToken, dispatch);
        })
        .catch(err => {
            dispatch({
                type: ATTEMPT_LOGIN_FAILURE,
                payload: err
            });
        });
};

export const decodeTokenAction = (jwtToken, dispatch) => {
    dispatch({type: DECODE_TOKEN});

    try {
        const decoded = jwtDecode(jwtToken);

        const prettyDecode = {
            email: decoded.sub,
            role: decoded.rol,
            expired: decoded.exp
        }

        dispatch({
            type: DECODE_TOKEN_SUCCESS,
            payload: prettyDecode
        });

        fetchActiveUserAction(prettyDecode.email, jwtToken, dispatch);

    } catch (err) {
        dispatch({
            type: DECODE_TOKEN_FAILURE,
            payload: err
        });
    }
};

export const logoutAction = (dispatch, history) => {
    dispatch({type: LOGOUT});
    history.push('/')
};
