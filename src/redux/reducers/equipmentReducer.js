import {
    ADD_EQUIPMENT,
    ADD_EQUIPMENT_FAILURE,
    ADD_EQUIPMENT_SUCCESS,
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

const initState = {
    equipment: undefined,
    equipmentList: undefined,
    loading: false,
    error: null,
    errorResponse: undefined,
}


export const equipmentReducer = (state = initState, action) => { // (1)
    switch (action.type) {
        case FETCH_EQUIPMENT_LIST:
        case FETCH_EQUIPMENT_DETAILS:
        case ADD_EQUIPMENT:
        case SAVE_EQUIPMENT:
            return {
                ...state,
                loading: true,
                error: null,
                errorResponse: undefined,
            };
        case FETCH_EQUIPMENT_LIST_SUCCESS:
            return {
                ...state,
                equipmentList: action.payload,
                loading: false
            };
        case FETCH_EQUIPMENT_DETAILS_SUCCESS:
        case SAVE_EQUIPMENT_SUCCESS:
            return {
                ...state,
                equipment: action.payload,
                loading: false
            }
        case ADD_EQUIPMENT_SUCCESS: {
            return {
                ...state,
                loading: false
            }
        }
        case FETCH_EQUIPMENT_LIST_FAILURE:
        case FETCH_EQUIPMENT_DETAILS_FAILURE:
        case ADD_EQUIPMENT_FAILURE:
        case SAVE_EQUIPMENT_FAILURE:
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