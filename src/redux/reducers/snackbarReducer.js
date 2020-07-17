import {ADD_STATUS, DISMISS_STATUS} from "../types/snackbarTypes";

const initState = {
    open: false,
    message: undefined,
    severity: undefined
}


export const snackbarReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case ADD_STATUS:
            return {
                ...state,
                open: true,
                message: action.message,
                severity: action.severity
            };
        case DISMISS_STATUS:
            return initState;
        default:
            return state
    }
}