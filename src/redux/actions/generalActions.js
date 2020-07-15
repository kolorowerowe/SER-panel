import {
    CHANGE_LANGUAGE,
    CHANGE_THEME,
} from "../types/generalTypes";

export const changeLanguage = (languageCode, dispatch) => {
    dispatch({
        type: CHANGE_LANGUAGE,
        payload: languageCode
    });
    localStorage.setItem("languageCode", languageCode)
}

export const changeTheme = (theme, dispatch) => {
    dispatch({
        type: CHANGE_THEME,
        payload: theme
    });
    localStorage.setItem("theme", theme)
}