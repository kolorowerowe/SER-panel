import {FETCH_GREETING, FETCH_GREETING_FAILURE, FETCH_GREETING_SUCCESS} from "../types/generalTypes";

const initState = {
    response: undefined,
    loading: false,
    error: null
}


export const greetingReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_GREETING:
            console.log("HERE")
            return {
                ...state,
                loading: true
            };
        case FETCH_GREETING_SUCCESS:
            return {
                ...state,
                loading: false,
                response: action.payload
            };
        case FETCH_GREETING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}