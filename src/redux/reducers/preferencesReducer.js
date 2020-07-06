import {CHANGE_LANGUAGE} from "../types/generalTypes";

const initState = {
    languageCode: localStorage.getItem("languageCode") || "pl"
}


export const preferencesReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                languageCode: action.payload
            };
        default:
            return state
    }
}