import {ATTEMPT_LOGIN, ATTEMPT_LOGIN_FAILURE, ATTEMPT_LOGIN_SUCCESS, LOGOUT} from "../types/authTypes";

const initState = {
    isLoggedIn: false,
    authToken: undefined,
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
        case LOGOUT:
            return {
                isLoggedIn: false,
                authToken: undefined,
                loading: false,
                error: null,
                errorResponse: undefined
            };
        default:
            return state
    }
}