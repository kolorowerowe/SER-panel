import {
    FETCH_ACTIVE_USER,
    FETCH_ACTIVE_USER_FAILURE,
    FETCH_ACTIVE_USER_SUCCESS
} from "../types/activeUserTypes";
import axios from "axios";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchActiveUserAction = (email, authToken, dispatch) => {
    dispatch({type: FETCH_ACTIVE_USER});

    axios.get(`${baseUrl}/user`, {
        params: {
            email
        },
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_ACTIVE_USER_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_ACTIVE_USER_FAILURE,
                payload: err
            });
        });
};
