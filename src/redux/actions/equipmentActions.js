import axios from "axios";
import {
    ADD_EQUIPMENT,
    ADD_EQUIPMENT_FAILURE,
    ADD_EQUIPMENT_SUCCESS,
    DELETE_EQUIPMENT,
    DELETE_EQUIPMENT_FAILURE,
    DELETE_EQUIPMENT_SUCCESS,
    FETCH_EQUIPMENT_DETAILS,
    FETCH_EQUIPMENT_DETAILS_FAILURE,
    FETCH_EQUIPMENT_DETAILS_SUCCESS,
    FETCH_EQUIPMENT_LIST,
    FETCH_EQUIPMENT_LIST_FAILURE,
    FETCH_EQUIPMENT_LIST_SUCCESS,
    SAVE_EQUIPMENT,
    SAVE_EQUIPMENT_FAILURE,
    SAVE_EQUIPMENT_SUCCESS
} from "../types/equipmentTypes";

import i18n from "../../i18n";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchEquipmentListAction = (authToken, dispatch) => {
    dispatch({type: FETCH_EQUIPMENT_LIST});

    axios.get(`${baseUrl}/equipment`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_EQUIPMENT_LIST_SUCCESS,
                payload: data.equipmentList
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_EQUIPMENT_LIST_FAILURE,
                payload: err
            });
        });
};

export const addEquipmentAction = (equipmentBody, authToken, dispatch, snackbar) => {
    dispatch({type: ADD_EQUIPMENT});

    axios.post(`${baseUrl}/equipment`, equipmentBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: ADD_EQUIPMENT_SUCCESS
            });
            fetchEquipmentListAction(authToken, dispatch);
        })
        .catch(err => {
            dispatch({
                type: ADD_EQUIPMENT_FAILURE,
                payload: err
            });
        });
};

export const fetchEquipmentDetailsAction = (equipmentId, authToken, dispatch) => {
    dispatch({type: FETCH_EQUIPMENT_DETAILS});

    axios.get(`${baseUrl}/equipment/${equipmentId}`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_EQUIPMENT_DETAILS_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_EQUIPMENT_DETAILS_FAILURE,
                payload: err
            });
        });
};

export const saveEquipmentAction = (equipmentId, saveEquipmentBody, authToken, dispatch, snackbar) => {
    dispatch({type: SAVE_EQUIPMENT});

    axios.patch(`${baseUrl}/equipment/${equipmentId}`, saveEquipmentBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: SAVE_EQUIPMENT_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: SAVE_EQUIPMENT_FAILURE,
                payload: err
            });
        });
};

export const deleteEquipmentAction = (equipmentId, authToken, dispatch, snackbar, navigate) => {
    dispatch({type: DELETE_EQUIPMENT});

    axios.delete(`${baseUrl}/equipment/${equipmentId}`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: DELETE_EQUIPMENT_SUCCESS,
                payload: data
            });
            snackbar.addSuccess(i18n.t('sponsorshipPackage:equipmentDeleted'));
            navigate("/equipment");
        })
        .catch(err => {
            dispatch({
                type: DELETE_EQUIPMENT_FAILURE,
                payload: err
            });
        });
};
