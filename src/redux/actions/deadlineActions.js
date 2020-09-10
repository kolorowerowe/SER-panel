import {
    FETCH_DEADLINE,
    FETCH_DEADLINE_FAILURE,
    FETCH_DEADLINE_SUCCESS,
    SAVE_DEADLINE,
    SAVE_DEADLINE_FAILURE,
    SAVE_DEADLINE_SUCCESS
} from "../types/deadlineTypes";

import axios from "axios";
import i18n from "../../i18n";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchDeadlinesAction = (authToken, dispatch) => {
    dispatch({type: FETCH_DEADLINE});

    axios.get(`${baseUrl}/deadline`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_DEADLINE_SUCCESS,
                payload: data.deadlines
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_DEADLINE_FAILURE,
                payload: err
            });
        });
};


export const saveDeadlinesAction = (deadlinesBody, authToken, dispatch, snackbar) => {
    dispatch({type: SAVE_DEADLINE});

    axios.post(`${baseUrl}/deadline`, deadlinesBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: SAVE_DEADLINE_SUCCESS,
                payload: data.deadlines
            });
            snackbar.addSuccess(i18n.t('deadline:deadlineSaved'));
        })
        .catch(err => {
            dispatch({
                type: SAVE_DEADLINE_FAILURE,
                payload: err
            });
            snackbar.addError(new Error(i18n.t('deadline:deadlineSavedError')));
        });
};