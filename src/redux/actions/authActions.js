import {ATTEMPT_LOGIN, ATTEMPT_LOGIN_FAILURE, ATTEMPT_LOGIN_SUCCESS, LOGOUT} from "../types/authTypes";
import axios from "axios";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const loginAction = ({email, password}, dispatch) => {
    dispatch({type: ATTEMPT_LOGIN});

    let formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);


    axios.post(`${baseUrl}/user/login`, formData)
        .then(({data}) => {
            dispatch({
                type: ATTEMPT_LOGIN_SUCCESS,
                payload: data.authToken
            });
        })
        .catch(err => {
            dispatch({
                type: ATTEMPT_LOGIN_FAILURE,
                payload: err
            });
        });
};

export const logoutAction = (dispatch, history) => {
    dispatch({type: LOGOUT});
    history.push('/')
};
