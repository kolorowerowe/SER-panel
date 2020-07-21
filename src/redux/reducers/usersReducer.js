import {
    FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS
} from "../types/usersTypes";

const initState = {
    users: undefined,
    loading: false,
    error: null,
    errorResponse: undefined,
}


export const usersReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_USERS:
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
        case FETCH_USERS_FAILURE:
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