import {
    ADD_SPONSORSHIP_PACKAGE,
    ADD_SPONSORSHIP_PACKAGE_FAILURE,
    ADD_SPONSORSHIP_PACKAGE_SUCCESS,
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

const initState = {
    sponsorshipPackageDetails: undefined,
    sponsorshipPackages: undefined,
    loading: false,
    error: null,
    errorResponse: undefined,
}


export const sponsorshipPackagesReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_SPONSORSHIP_PACKAGES:
        case FETCH_SPONSORSHIP_PACKAGE_DETAILS:
        case ADD_SPONSORSHIP_PACKAGE:
        case SAVE_SPONSORSHIP_PACKAGE:
            return {
                ...state,
                loading: true,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_SPONSORSHIP_PACKAGES_SUCCESS:
            return {
                ...state,
                sponsorshipPackages: action.payload,
                loading: false
            };
        case FETCH_SPONSORSHIP_PACKAGE_DETAILS_SUCCESS:
        case SAVE_SPONSORSHIP_PACKAGE_SUCCESS:
            return {
                ...state,
                sponsorshipPackageDetails: action.payload,
                loading: false
            }
        case ADD_SPONSORSHIP_PACKAGE_SUCCESS: {
            return {
                ...state,
                loading: false
            }
        }
        case FETCH_SPONSORSHIP_PACKAGES_FAILURE:
        case FETCH_SPONSORSHIP_PACKAGE_DETAILS_FAILURE:
        case ADD_SPONSORSHIP_PACKAGE_FAILURE:
        case SAVE_SPONSORSHIP_PACKAGE_FAILURE:
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