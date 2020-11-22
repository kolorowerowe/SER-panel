import {
    FETCH_EVENT_CONFIG,
    FETCH_EVENT_CONFIG_FAILURE,
    FETCH_EVENT_CONFIG_SUCCESS,
    SAVE_EVENT_CONFIG,
    SAVE_EVENT_CONFIG_FAILURE,
    SAVE_EVENT_CONFIG_SUCCESS
} from "../types/eventConfig";


import axios from "axios";
import i18n from "../../i18n";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchEventConfigAction = () => (dispatch, getState) => {
    dispatch({type: FETCH_EVENT_CONFIG});
    const {authToken} = getState().auth;

    axios.get(`${baseUrl}/event-config`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_EVENT_CONFIG_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_EVENT_CONFIG_FAILURE,
                payload: err
            });
        });
};


export const saveEventConfigAction = (eventConfigBody, authToken, dispatch, snackbar) => {
    dispatch({type: SAVE_EVENT_CONFIG});

    axios.post(`${baseUrl}/event-config`, eventConfigBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: SAVE_EVENT_CONFIG_SUCCESS,
                payload: data.deadlines
            });
            snackbar.addSuccess(i18n.t('general:successfullySaved'));
        })
        .catch(err => {
            dispatch({
                type: SAVE_EVENT_CONFIG_FAILURE,
                payload: err
            });
            snackbar.addError(new Error(i18n.t('general:errorOccurred')));
        });
};