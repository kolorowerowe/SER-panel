import {
    CHANGE_LANGUAGE,
    CHANGE_THEME,
    FETCH_GREETING,
    FETCH_GREETING_FAILURE,
    FETCH_GREETING_SUCCESS
} from "../types/generalTypes";
import axios from "axios";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchGreetingAction = (dispatch) => {
    dispatch({type: FETCH_GREETING});

    axios.get(`${baseUrl}/user/greeting`)
        .then(({data}) => {
            dispatch({
                type: FETCH_GREETING_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_GREETING_FAILURE,
                payload: err
            });
        });
};

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