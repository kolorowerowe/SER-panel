import {FETCH_STATISTICS, FETCH_STATISTICS_FAILURE, FETCH_STATISTICS_SUCCESS} from "../types/statisticsTypes";

const initState = {
    statistics: undefined,
    loading: false,
    error: null,
    errorResponse: undefined,
}

export const statisticsReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_STATISTICS:
            return {
                ...state,
                loading: true,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_STATISTICS_SUCCESS:
            return {
                ...state,
                statistics: action.payload,
                loading: false,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_STATISTICS_FAILURE:
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