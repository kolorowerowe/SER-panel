import {combineReducers, createStore} from 'redux';
import {activeUserReducer} from "./reducers/activeUserReducer";
import {preferencesReducer} from "./reducers/preferencesReducer";
import {authReducer} from "./reducers/authReducer";
import {snackbarReducer} from "./reducers/snackbarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {activateUserProcessReducer} from "./reducers/activateUserProcessReducer";
import {companiesReducer} from "./reducers/companiesReducer";
import {sponsorshipPackagesReducer} from "./reducers/sponsorshipPackageReducer";
import {deadlineReducer} from "./reducers/deadlineReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    activeUser: activeUserReducer,
    activateUserProcess: activateUserProcessReducer,
    companies: companiesReducer,
    deadline: deadlineReducer,
    preferences: preferencesReducer,
    snackbar: snackbarReducer,
    sponsorshipPackages: sponsorshipPackagesReducer,
    users: usersReducer
});
export type RootState = ReturnType<typeof rootReducer>


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, composeEnhancers);