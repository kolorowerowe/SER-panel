import {
    SEND_VERIFICATION_CODE,
    SEND_VERIFICATION_CODE_FAILURE,
    SEND_VERIFICATION_CODE_SUCCESS, SETUP_PASSWORD,
    SETUP_PASSWORD_FAILURE, SETUP_PASSWORD_SUCCESS,
    START_PROCESS_AGAIN,
    VERIFY_CODE,
    VERIFY_CODE_FAILURE,
    VERIFY_CODE_SUCCESS
} from "../types/activateUserProcessTypes";

const initState = {
    sentVerificationCode: false,
    verifiedCode: false,
    setupNewPassword: false,
    email: undefined,
    userId: undefined,
    tempAuthToken: undefined,
    loading: false,
    error: null,
    errorResponse: undefined
}


export const activateUserProcessReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case SEND_VERIFICATION_CODE:
            return {
                ...state,
                loading: true,
                email: action.payload,
                error: null,
                errorResponse: undefined
            };
        case SEND_VERIFICATION_CODE_SUCCESS:
            return {
                ...state,
                sentVerificationCode: true,
                loading: false
            };
        case VERIFY_CODE:
        case SETUP_PASSWORD:
            return {
                ...state,
                loading: true,
                error: null,
                errorResponse: undefined
            }
        case VERIFY_CODE_SUCCESS:
            return {
                ...state,
                loading: false,
                verifiedCode: true,
                userId: action.userId,
                tempAuthToken: action.authToken
            }
        case SETUP_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                setupNewPassword: true,
            }
        case SEND_VERIFICATION_CODE_FAILURE:
        case VERIFY_CODE_FAILURE:
        case SETUP_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                errorResponse: action.payload.response
            }
        case START_PROCESS_AGAIN:
            return initState;
        default:
            return state
    }
}