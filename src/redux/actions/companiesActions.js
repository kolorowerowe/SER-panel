import {
    CHANGE_COMPANY_DETAILS,
    CHANGE_COMPANY_DETAILS_FAILURE,
    CHANGE_COMPANY_DETAILS_SUCCESS,
    CREATE_COMPANY,
    CREATE_COMPANY_FAILURE,
    CREATE_COMPANY_SUCCESS,
    FETCH_COMPANIES,
    FETCH_COMPANIES_FAILURE,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANY_DETAILS,
    FETCH_COMPANY_DETAILS_FAILURE,
    FETCH_COMPANY_DETAILS_SUCCESS
} from "../types/companyTypes";
import axios from "axios";
import i18n from "../../i18n";
import {fetchActiveUserAction} from "./activeUserActions";


const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const fetchCompaniesAction = (authToken, dispatch) => {
    dispatch({type: FETCH_COMPANIES});

    axios.get(`${baseUrl}/company`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_COMPANIES_SUCCESS,
                payload: data.companyList
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_COMPANIES_FAILURE,
                payload: err
            });
        });
};


export const fetchCompanyDetailsAction = (companyId, authToken, dispatch) => {
    dispatch({type: FETCH_COMPANY_DETAILS});

    axios.get(`${baseUrl}/company/${companyId}`, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: FETCH_COMPANY_DETAILS_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_COMPANY_DETAILS_FAILURE,
                payload: err
            });
        });
};

export const changeCompanyDetailsAction = (companyId, changeCompanyDetailsBody, authToken, dispatch, snackbar) => {
    dispatch({type: CHANGE_COMPANY_DETAILS});

    axios.patch(`${baseUrl}/company/${companyId}`, changeCompanyDetailsBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: CHANGE_COMPANY_DETAILS_SUCCESS,
                payload: data
            });
            snackbar.addSuccess(i18n.t('company:companyDetailsChanged'));
        })
        .catch(err => {
            dispatch({
                type: CHANGE_COMPANY_DETAILS_FAILURE,
                payload: err
            });
        });
};

export const createCompanyAction = (createCompanyBody, userEmail, authToken, dispatch, snackbar) => {
    dispatch({type: CREATE_COMPANY});

    axios.post(`${baseUrl}/company`, createCompanyBody, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({data}) => {
            dispatch({
                type: CREATE_COMPANY_SUCCESS,
                payload: data
            });
            fetchActiveUserAction(userEmail, authToken, dispatch);
            snackbar.addSuccess(i18n.t('company:companyRegisteredSuccess'));
        })
        .catch(err => {
            dispatch({
                type: CREATE_COMPANY_FAILURE,
                payload: err
            });
            snackbar.addError(new Error(i18n.t('company:companyRegisteredFailure')));
        });
};