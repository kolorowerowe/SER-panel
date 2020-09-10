import {
    FETCH_DEADLINE,
    FETCH_DEADLINE_FAILURE,
    FETCH_DEADLINE_SUCCESS,
    SAVE_DEADLINE,
    SAVE_DEADLINE_FAILURE,
    SAVE_DEADLINE_SUCCESS
} from "../types/deadlineTypes";

const initState = {
    deadlines: undefined,
    loading: false,
    error: null,
    errorResponse: undefined,
}

export const deadlineReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_DEADLINE:
        case SAVE_DEADLINE:
            return {
                ...state,
                loading: true,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_DEADLINE_SUCCESS:
        case SAVE_DEADLINE_SUCCESS:
            return {
                ...state,
                deadlines: action.payload,
                loading: false,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_DEADLINE_FAILURE:
        case SAVE_DEADLINE_FAILURE:
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