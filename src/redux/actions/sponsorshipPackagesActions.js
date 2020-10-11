import axios from "axios";
import {
    ADD_EQUIPMENT_TO_SP,
    ADD_EQUIPMENT_TO_SP_FAILURE,
    ADD_EQUIPMENT_TO_SP_SUCCESS,
    ADD_SPONSORSHIP_PACKAGE,
    ADD_SPONSORSHIP_PACKAGE_FAILURE,
    ADD_SPONSORSHIP_PACKAGE_SUCCESS,
    DELETE_SP_EQUIPMENT,
    DELETE_SP_EQUIPMENT_FAILURE,
    DELETE_SP_EQUIPMENT_SUCCESS,
    DELETE_SPONSORSHIP_PACKAGE,
    DELETE_SPONSORSHIP_PACKAGE_FAILURE,
    DELETE_SPONSORSHIP_PACKAGE_SUCCESS,
    FETCH_SPONSORSHIP_PACKAGE_DETAILS,
    FETCH_SPONSORSHIP_PACKAGE_DETAILS_FAILURE,
    FETCH_SPONSORSHIP_PACKAGE_DETAILS_SUCCESS,
    FETCH_SPONSORSHIP_PACKAGES,
    FETCH_SPONSORSHIP_PACKAGES_FAILURE,
    FETCH_SPONSORSHIP_PACKAGES_SUCCESS,
    MODIFY_SP_EQUIPMENT,
    MODIFY_SP_EQUIPMENT_FAILURE,
    MODIFY_SP_EQUIPMENT_SUCCESS,
    SAVE_SPONSORSHIP_PACKAGE,
    SAVE_SPONSORSHIP_PACKAGE_FAILURE,
    SAVE_SPONSORSHIP_PACKAGE_SUCCESS
} from "../types/sponsorshipPackageTypes";
import i18n from "../../i18n";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchSponsorshipPackagesAction =  () =>  (dispatch, getState) => {
    dispatch({type: FETCH_SPONSORSHIP_PACKAGES});

    const {authToken} = getState().auth;

    axios.get(`${baseUrl}/sponsorship-package`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_SPONSORSHIP_PACKAGES_SUCCESS,
                payload: data.sponsorshipPackageList
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_SPONSORSHIP_PACKAGES_FAILURE,
                payload: err
            });
        });
};

export const addSponsorshipPackageAction = (sponsorshipPackageBody, snackbar) => (dispatch, getState) => {
    dispatch({type: ADD_SPONSORSHIP_PACKAGE});
    const {authToken} = getState().auth;

    axios.post(`${baseUrl}/sponsorship-package`, sponsorshipPackageBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: ADD_SPONSORSHIP_PACKAGE_SUCCESS
            });
            dispatch(fetchSponsorshipPackagesAction());
        })
        .catch(err => {
            dispatch({
                type: ADD_SPONSORSHIP_PACKAGE_FAILURE,
                payload: err
            });
        });
};

export const fetchSponsorshipPackageDetailsAction = (sponsorshipPackageId) => (dispatch, getState)=> {
    dispatch({type: FETCH_SPONSORSHIP_PACKAGE_DETAILS});
    const {authToken} = getState().auth;

    axios.get(`${baseUrl}/sponsorship-package/${sponsorshipPackageId}`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_SPONSORSHIP_PACKAGE_DETAILS_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_SPONSORSHIP_PACKAGE_DETAILS_FAILURE,
                payload: err
            });
        });
};

export const saveSponsorshipPackageAction = (sponsorshipPackageId, saveSponsorshipPackageBody, snackbar) => (dispatch, getState) => {
    dispatch({type: SAVE_SPONSORSHIP_PACKAGE});
    const {authToken} = getState().auth;

    axios.patch(`${baseUrl}/sponsorship-package/${sponsorshipPackageId}`, saveSponsorshipPackageBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: SAVE_SPONSORSHIP_PACKAGE_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: SAVE_SPONSORSHIP_PACKAGE_FAILURE,
                payload: err
            });
        });
};

export const deleteSponsorshipPackageAction = (sponsorshipPackageId, snackbar, navigate) => (dispatch, getState) => {
    dispatch({type: DELETE_SPONSORSHIP_PACKAGE});
    const {authToken} = getState().auth;

    axios.delete(`${baseUrl}/sponsorship-package/${sponsorshipPackageId}`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: DELETE_SPONSORSHIP_PACKAGE_SUCCESS,
                payload: data
            });
            snackbar.addSuccess(i18n.t('sponsorshipPackage:sponsorshipPackageDeleted'));
            navigate("/sponsorship-package");
        })
        .catch(err => {
            dispatch({
                type: DELETE_SPONSORSHIP_PACKAGE_FAILURE,
                payload: err
            });
        });
};

export const addEquipmentToSponsorshipPackageAction = (sponsorshipPackageId, request) => (dispatch, getState) => {
    dispatch({type: ADD_EQUIPMENT_TO_SP});
    const {authToken} = getState().auth;

    axios.post(`${baseUrl}/sponsorship-package/${sponsorshipPackageId}/equipment`, request, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: ADD_EQUIPMENT_TO_SP_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: ADD_EQUIPMENT_TO_SP_FAILURE,
                payload: err
            });
        });
};

export const modifySpEquipmentAction = (sponsorshipPackageId, spEquipmentId, request) => (dispatch, getState) => {
    dispatch({type: MODIFY_SP_EQUIPMENT});
    const {authToken} = getState().auth;

    axios.patch(`${baseUrl}/sponsorship-package/${sponsorshipPackageId}/equipment/${spEquipmentId}`, request, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: MODIFY_SP_EQUIPMENT_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: MODIFY_SP_EQUIPMENT_FAILURE,
                payload: err
            });
        });
};

export const deleteSpEquipmentAction = (sponsorshipPackageId, spEquipmentId) => (dispatch, getState) => {
    dispatch({type: DELETE_SP_EQUIPMENT});
    const {authToken} = getState().auth;

    axios.delete(`${baseUrl}/sponsorship-package/${sponsorshipPackageId}/equipment/${spEquipmentId}`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: DELETE_SP_EQUIPMENT_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: DELETE_SP_EQUIPMENT_FAILURE,
                payload: err
            });
        });
};
