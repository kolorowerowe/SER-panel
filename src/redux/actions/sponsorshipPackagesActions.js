import axios from "axios";
import {
    ADD_SPONSORSHIP_PACKAGE,
    ADD_SPONSORSHIP_PACKAGE_FAILURE,
    ADD_SPONSORSHIP_PACKAGE_SUCCESS,
    DELETE_SPONSORSHIP_PACKAGE,
    DELETE_SPONSORSHIP_PACKAGE_FAILURE,
    DELETE_SPONSORSHIP_PACKAGE_SUCCESS,
    FETCH_SPONSORSHIP_PACKAGE_DETAILS,
    FETCH_SPONSORSHIP_PACKAGE_DETAILS_FAILURE,
    FETCH_SPONSORSHIP_PACKAGE_DETAILS_SUCCESS,
    FETCH_SPONSORSHIP_PACKAGES,
    FETCH_SPONSORSHIP_PACKAGES_FAILURE,
    FETCH_SPONSORSHIP_PACKAGES_SUCCESS,
    SAVE_SPONSORSHIP_PACKAGE,
    SAVE_SPONSORSHIP_PACKAGE_FAILURE,
    SAVE_SPONSORSHIP_PACKAGE_SUCCESS
} from "../types/sponsorshipPackageTypes";
import i18n from "../../i18n";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchSponsorshipPackagesAction = (authToken, dispatch) => {
    dispatch({type: FETCH_SPONSORSHIP_PACKAGES});

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

export const addSponsorshipPackageAction = (sponsorshipPackageBody, authToken, dispatch, snackbar) => {
    dispatch({type: ADD_SPONSORSHIP_PACKAGE});

    axios.post(`${baseUrl}/sponsorship-package`, sponsorshipPackageBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: ADD_SPONSORSHIP_PACKAGE_SUCCESS
            });
            fetchSponsorshipPackagesAction(authToken, dispatch);
        })
        .catch(err => {
            dispatch({
                type: ADD_SPONSORSHIP_PACKAGE_FAILURE,
                payload: err
            });
        });
};

export const fetchSponsorshipPackageDetailsAction = (sponsorshipPackageId, authToken, dispatch) => {
    dispatch({type: FETCH_SPONSORSHIP_PACKAGE_DETAILS});

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

export const saveSponsorshipPackageAction = (sponsorshipPackageId, saveSponsorshipPackageBody, authToken, dispatch, snackbar) => {
    dispatch({type: SAVE_SPONSORSHIP_PACKAGE});

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

export const deleteSponsorshipPackageAction = (sponsorshipPackageId, authToken, dispatch, snackbar, history) => {
    dispatch({type: DELETE_SPONSORSHIP_PACKAGE});

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
            history.push("/sponsorship-packages");
        })
        .catch(err => {
            dispatch({
                type: DELETE_SPONSORSHIP_PACKAGE_FAILURE,
                payload: err
            });
        });
};
