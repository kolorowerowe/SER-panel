import {ADD_STATUS, DISMISS_STATUS} from "../types/snackbarTypes";


export const addStatusAction = (message, severity, dispatch) => {
    dispatch({
        type: ADD_STATUS,
        message,
        severity
    });
}


export const closeSnackbarAction = (dispatch) => {
    dispatch({
        type: DISMISS_STATUS,
    });
}
