import {
    ATTEMPT_LOGIN,
    ATTEMPT_LOGIN_FAILURE,
    ATTEMPT_LOGIN_SUCCESS,
    CHECK_SAVED_TOKEN,
    CHECK_SAVED_TOKEN_FAILURE,
    CHECK_SAVED_TOKEN_SUCCESS,
    DECODE_TOKEN,
    DECODE_TOKEN_FAILURE,
    DECODE_TOKEN_SUCCESS,
    LOGOUT
} from "../types/authTypes";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {fetchActiveUserAction} from "./activeUserActions";
import {ADMINISTRATOR_ROLES, COMPANY_ROLES, EDIT_RIGHTS_ROLES, ORGANIZER_ROLES} from "../../utils/constans";


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
            localStorage.setItem("accessToken", data.authToken);
        })
        .catch(err => {
            dispatch({
                type: ATTEMPT_LOGIN_FAILURE,
                payload: err
            });
        });
};

export const checkSavedToken = (accessToken, dispatch) => {
    dispatch({type: CHECK_SAVED_TOKEN});
    console.log(accessToken);
    axios.get(`${baseUrl}/user/check-token`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
        .then(() => {
            dispatch({
                type: CHECK_SAVED_TOKEN_SUCCESS,
                payload: accessToken
            });
            decodeTokenAction(accessToken, dispatch);
        })
        .catch(err => {
            dispatch({
                type: CHECK_SAVED_TOKEN_FAILURE,
                payload: err
            });
            localStorage.removeItem("accessToken");
        });
};


export const decodeTokenAction = (jwtToken, dispatch) => {
    dispatch({type: DECODE_TOKEN});

    try {
        const decoded = jwtDecode(jwtToken);
        const role = decoded.rol.substring(5);

        const prettyDecode = {
            email: decoded.sub,
            role: role,
            expired: decoded.exp
        }

        const permissions = {
            isAdmin: ADMINISTRATOR_ROLES.includes(role),
            isOrganizer: ORGANIZER_ROLES.includes(role),
            isCompany: COMPANY_ROLES.includes(role),
            hasEditRight: EDIT_RIGHTS_ROLES.includes(role)
        }

        dispatch({
            type: DECODE_TOKEN_SUCCESS,
            payload: prettyDecode,
            permissions
        });

        fetchActiveUserAction(prettyDecode.email, jwtToken, dispatch);

    } catch (err) {
        dispatch({
            type: DECODE_TOKEN_FAILURE,
            payload: err
        });
    }
};

export const logoutAction = (dispatch, navigate) => {
    localStorage.removeItem("accessToken");
    dispatch({type: LOGOUT});
    navigate('/')
};
