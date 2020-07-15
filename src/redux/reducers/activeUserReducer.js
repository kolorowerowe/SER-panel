import {FETCH_ACTIVE_USER, FETCH_ACTIVE_USER_FAILURE, FETCH_ACTIVE_USER_SUCCESS} from "../types/activeUserTypes";

const initState = {
    response: undefined,
    loading: false,
    error: null
}


export const activeUserReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_ACTIVE_USER:
            return {
                ...state,
                loading: true
            };
        case FETCH_ACTIVE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                response: action.payload
            };
        case FETCH_ACTIVE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}