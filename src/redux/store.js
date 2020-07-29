import {combineReducers, createStore} from 'redux';
import {activeUserReducer} from "./reducers/activeUserReducer";
import {preferencesReducer} from "./reducers/preferencesReducer";
import {authReducer} from "./reducers/authReducer";
import {snackbarReducer} from "./reducers/snackbarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {activateUserProcessReducer} from "./reducers/activateUserProcessReducer";
import {companiesReducer} from "./reducers/companiesReducer";

export const store = createStore(combineReducers({
    auth: authReducer,
    activeUser: activeUserReducer,
    activateUserProcess: activateUserProcessReducer,
    companies: companiesReducer,
    preferences: preferencesReducer,
    snackbar: snackbarReducer,
    users: usersReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());