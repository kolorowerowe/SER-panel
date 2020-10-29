
import axios from "axios";

import {FETCH_STATISTICS, FETCH_STATISTICS_FAILURE, FETCH_STATISTICS_SUCCESS} from "../types/statisticsTypes";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchStatisticsAction = () => (dispatch, getState) => {
    dispatch({type: FETCH_STATISTICS});

    const {authToken} = getState().auth;

    axios.get(`${baseUrl}/statistics`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_STATISTICS_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_STATISTICS_FAILURE,
                payload: err
            });
        });
};

