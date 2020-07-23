import {
    ADD_NEW_USER,
    ADD_NEW_USER_FAILURE,
    ADD_NEW_USER_SUCCESS,
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

const initState = {
    user: undefined,
    users: undefined,
    loading: false,
    error: null,
    errorResponse: undefined,
}


export const usersReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_USERS:
        case FETCH_USER_DETAILS:
        case CHANGE_USER_DETAILS:
        case ADD_NEW_USER:
        case DELETE_USER:
            return {
                ...state,
                loading: true,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case FETCH_USER_DETAILS_SUCCESS:
        case CHANGE_USER_DETAILS_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case ADD_NEW_USER_SUCCESS:
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case FETCH_USERS_FAILURE:
        case FETCH_USER_DETAILS_FAILURE:
        case CHANGE_USER_DETAILS_FAILURE:
        case ADD_NEW_USER_FAILURE:
        case DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                errorResponse: action.payload.response
            }
        default:
            return state
    }
}