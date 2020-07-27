import {
    ADD_NEW_USER, ADD_NEW_USER_FAILURE, ADD_NEW_USER_SUCCESS,
    CHANGE_USER_DETAILS,
    CHANGE_USER_DETAILS_FAILURE,
    CHANGE_USER_DETAILS_SUCCESS,
    DELETE_USER,
    DELETE_USER_FAILURE,
    DELETE_USER_SUCCESS,
    FETCH_USER_DETAILS,
    FETCH_USER_DETAILS_FAILURE,
    FETCH_USER_DETAILS_SUCCESS,
    FETCH_USERS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS
} from "../types/usersTypes";
import axios from "axios";
import i18n from "../../i18n";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchUsersAction = (authToken, dispatch) => {
    dispatch({type: FETCH_USERS});

    axios.get(`${baseUrl}/user`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_USERS_SUCCESS,
                payload: data.users
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_USERS_FAILURE,
                payload: err
            });
        });
};


export const fetchUserDetailsAction = (userId, authToken, dispatch) => {
    dispatch({type: FETCH_USER_DETAILS});

    axios.get(`${baseUrl}/user/${userId}`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_USER_DETAILS_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_USER_DETAILS_FAILURE,
                payload: err
            });
        });
};

export const changeUserDetailsAction = (userId, changeUSerDetailsBody, authToken, dispatch, snackbar) => {
    dispatch({type: CHANGE_USER_DETAILS});

    axios.patch(`${baseUrl}/user/${userId}`, changeUSerDetailsBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: CHANGE_USER_DETAILS_SUCCESS,
                payload: data
            });
            snackbar.addSuccess(i18n.t('user:userDetailsChanged'));
        })
        .catch(err => {
            dispatch({
                type: CHANGE_USER_DETAILS_FAILURE,
                payload: err
            });
        });
};

export const deleteUserAction = (userId, authToken, dispatch, snackbar, history) => {
    dispatch({type: DELETE_USER});

    axios.delete(`${baseUrl}/user/${userId}`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: DELETE_USER_SUCCESS,
                payload: data
            });
            snackbar.addSuccess(i18n.t('user:userDeleted'));
            history.push('/users');
        })
        .catch(err => {
            dispatch({
                type: DELETE_USER_FAILURE,
                payload: err
            });
        });
};

export const addNewUserAction = (userBody, authToken, dispatch, snackbar) => {
    dispatch({type: ADD_NEW_USER});

    axios.post(`${baseUrl}/user`, userBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: ADD_NEW_USER_SUCCESS,
                payload: data
            });
            snackbar.addSuccess(i18n.t('user:userAdded'));
            fetchUsersAction(authToken, dispatch);
        })
        .catch(err => {
            dispatch({
                type: ADD_NEW_USER_FAILURE,
                payload: err
            });
        });
};