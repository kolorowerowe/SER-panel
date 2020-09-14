import {
    CHANGE_COMPANY_DETAILS,
    CHANGE_COMPANY_DETAILS_FAILURE,
    CHANGE_COMPANY_DETAILS_SUCCESS,
    CREATE_COMPANY,
    CREATE_COMPANY_FAILURE,
    CREATE_COMPANY_SUCCESS,
    FETCH_COMPANIES,
    FETCH_COMPANIES_FAILURE,
    FETCH_COMPANIES_FOR_USER,
    FETCH_COMPANIES_FOR_USER_FAILURE,
    FETCH_COMPANIES_FOR_USER_SUCCESS,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANY_DETAILS,
    FETCH_COMPANY_DETAILS_FAILURE,
    FETCH_COMPANY_DETAILS_SUCCESS,
    SET_COMPANY_SPONSORSHIP_PACKAGE,
    SET_COMPANY_SPONSORSHIP_PACKAGE_FAILURE,
    SET_COMPANY_SPONSORSHIP_PACKAGE_SUCCESS
} from "../types/companyTypes";

const initState = {
    company: undefined,
    companies: undefined,
    loading: false,
    error: null,
    errorResponse: undefined,
}


export const companiesReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_COMPANIES:
        case FETCH_COMPANIES_FOR_USER:
        case CHANGE_COMPANY_DETAILS:
        case CREATE_COMPANY:
        case SET_COMPANY_SPONSORSHIP_PACKAGE:
            return {
                ...state,
                loading: true,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_COMPANY_DETAILS:
            return {
                ...state,
                company: undefined,
                loading: true,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_COMPANIES_SUCCESS:
        case FETCH_COMPANIES_FOR_USER_SUCCESS:
            return {
                ...state,
                companies: action.payload,
                loading: false
            };
        case FETCH_COMPANY_DETAILS_SUCCESS:
        case CHANGE_COMPANY_DETAILS_SUCCESS:
        case SET_COMPANY_SPONSORSHIP_PACKAGE_SUCCESS:
            return {
                ...state,
                company: action.payload,
                loading: false
            };
        case CREATE_COMPANY_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case FETCH_COMPANIES_FAILURE:
        case FETCH_COMPANIES_FOR_USER_FAILURE:
        case FETCH_COMPANY_DETAILS_FAILURE:
        case CHANGE_COMPANY_DETAILS_FAILURE:
        case CREATE_COMPANY_FAILURE:
        case SET_COMPANY_SPONSORSHIP_PACKAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                errorResponse: action.payload.response
            }
        default:
            return state
    }
}