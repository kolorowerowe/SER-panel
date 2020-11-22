import {
    FETCH_EVENT_CONFIG,
    FETCH_EVENT_CONFIG_FAILURE,
    FETCH_EVENT_CONFIG_SUCCESS,
    SAVE_EVENT_CONFIG,
    SAVE_EVENT_CONFIG_FAILURE,
    SAVE_EVENT_CONFIG_SUCCESS
} from "../types/eventConfig";

const initState = {
    eventConfig: undefined,
    loading: false,
    error: null,
    errorResponse: undefined,
}

export const eventConfigReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_EVENT_CONFIG:
        case SAVE_EVENT_CONFIG:
            return {
                ...state,
                loading: true,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_EVENT_CONFIG_SUCCESS:
        case SAVE_EVENT_CONFIG_SUCCESS:
            return {
                ...state,
                eventConfig: action.payload,
                loading: false,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_EVENT_CONFIG_FAILURE:
        case SAVE_EVENT_CONFIG_FAILURE:
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