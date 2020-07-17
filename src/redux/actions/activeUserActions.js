import {
    CHANGE_USER_PASSWORD, CHANGE_USER_PASSWORD_FAILURE, CHANGE_USER_PASSWORD_SUCCESS,
    FETCH_ACTIVE_USER,
    FETCH_ACTIVE_USER_FAILURE,
    FETCH_ACTIVE_USER_SUCCESS
} from "../types/activeUserTypes";
import axios from "axios";
import i18n from "../../i18n";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchActiveUserAction = (email, authToken, dispatch) => {
    dispatch({type: FETCH_ACTIVE_USER});

    axios.get(`${baseUrl}/user`, {
        params: {
            email
        },
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_ACTIVE_USER_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_ACTIVE_USER_FAILURE,
                payload: err
            });
        });
};

export const changeUserPasswordAction = (userId, changePasswordBody, authToken, dispatch, snackbar) => {
    dispatch({type: CHANGE_USER_PASSWORD});

    axios.post(`${baseUrl}/user/${userId}/password`, changePasswordBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: CHANGE_USER_PASSWORD_SUCCESS,
                payload: data
            });
            snackbar.addSuccess(i18n.t('user:passwordChanged'))
        })
        .catch(err => {
            dispatch({
                type: CHANGE_USER_PASSWORD_FAILURE,
                payload: err
            });
        });
};

