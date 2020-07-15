import {CHANGE_LANGUAGE, CHANGE_THEME} from "../types/generalTypes";

const initState = {
    languageCode: localStorage.getItem("languageCode") || "pl",
    theme: localStorage.getItem("theme") || "light"
}


export const preferencesReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                languageCode: action.payload
            };
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.payload
            };
        default:
            return state
    }
}