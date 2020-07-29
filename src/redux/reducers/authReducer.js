import {
    ATTEMPT_LOGIN,
    ATTEMPT_LOGIN_FAILURE,
    ATTEMPT_LOGIN_SUCCESS,
    DECODE_TOKEN_SUCCESS,
    LOGOUT
} from "../types/authTypes";

const initState = {
    isLoggedIn: false,
    authToken: undefined,
    auth: undefined,
    isAdmin: false,
    isOrganizer: false,
    hasEditRight: false,
    loading: false,
    error: null,
    errorResponse: undefined
}


export const authReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case ATTEMPT_LOGIN:
            return {
                ...state,
                loading: true
            };
        case ATTEMPT_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                authToken: action.payload
            };
        case ATTEMPT_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                errorResponse: action.payload.response
            }
        case DECODE_TOKEN_SUCCESS:
            return {
                ...state,
                auth: action.payload,
                isAdmin: action.permissions.isAdmin,
                isOrganizer: action.permissions.isOrganizer,
                isCompany: action.permissions.isCompany,
                hasEditRight: action.permissions.hasEditRight
            }
        case LOGOUT:
            return initState;
        default:
            return state
    }
}