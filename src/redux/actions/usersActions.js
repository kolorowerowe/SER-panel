import {FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS} from "../types/usersTypes";
import axios from "axios";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchUsersAction = (authToken, dispatch) => {
    dispatch({type: FETCH_USERS});

    axios.get(`${baseUrl}/user`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_USERS_SUCCESS,
                payload: data.users
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_USERS_FAILURE,
                payload: err
            });
        });
};
