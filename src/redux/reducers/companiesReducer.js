import {
    CHANGE_COMPANY_DETAILS,
    CHANGE_COMPANY_DETAILS_FAILURE,
    CHANGE_COMPANY_DETAILS_SUCCESS,
    FETCH_COMPANIES,
    FETCH_COMPANIES_FAILURE,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANY_DETAILS,
    FETCH_COMPANY_DETAILS_FAILURE,
    FETCH_COMPANY_DETAILS_SUCCESS
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
        case FETCH_COMPANY_DETAILS:
        case CHANGE_COMPANY_DETAILS:
            return {
                ...state,
                loading: true,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_COMPANIES_SUCCESS:
            return {
                ...state,
                companies: action.payload,
                loading: false
            };
        case FETCH_COMPANY_DETAILS_SUCCESS:
        case CHANGE_COMPANY_DETAILS_SUCCESS:
            return {
                ...state,
                company: action.payload,
                loading: false
            };
        case FETCH_COMPANIES_FAILURE:
        case FETCH_COMPANY_DETAILS_FAILURE:
        case CHANGE_COMPANY_DETAILS_FAILURE:
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