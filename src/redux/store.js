import {combineReducers, createStore} from 'redux';
import {activeUserReducer} from "./reducers/activeUserReducer";
import {preferencesReducer} from "./reducers/preferencesReducer";
import {authReducer} from "./reducers/authReducer";
import {snackbarReducer} from "./reducers/snackbarReducer";

export const store = createStore(combineReducers({
    auth: authReducer,
    activeUser: activeUserReducer,
    preferences: preferencesReducer,
    snackbar: snackbarReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());