import {
    CHANGE_USER_PASSWORD, CHANGE_USER_PASSWORD_FAILURE, CHANGE_USER_PASSWORD_SUCCESS,
    FETCH_ACTIVE_USER,
    FETCH_ACTIVE_USER_FAILURE,
    FETCH_ACTIVE_USER_SUCCESS
} from "../types/activeUserTypes";

const initState = {
    user: undefined,
    loading: false,
    error: null,
    errorResponse: undefined,
    errorPassword: null,
    errorPasswordResponse: undefined,
}


export const activeUserReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_ACTIVE_USER:
        case CHANGE_USER_PASSWORD:
            return {
                ...state,
                loading: true,
                error: null,
                errorResponse: undefined,
                errorPassword: null,
                errorPasswordResponse: undefined,
            };
        case FETCH_ACTIVE_USER_SUCCESS:
        case CHANGE_USER_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case FETCH_ACTIVE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                errorResponse: action.payload.response
            }
        case CHANGE_USER_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                errorPassword: action.payload,
                errorPasswordResponse: action.payload.response
            }
        default:
            return state
    }
}