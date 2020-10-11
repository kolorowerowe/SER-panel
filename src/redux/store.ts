import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {activeUserReducer} from "./reducers/activeUserReducer";
import {preferencesReducer} from "./reducers/preferencesReducer";
import {authReducer} from "./reducers/authReducer";
import {snackbarReducer} from "./reducers/snackbarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {activateUserProcessReducer} from "./reducers/activateUserProcessReducer";
import {companiesReducer} from "./reducers/companiesReducer";
import {sponsorshipPackagesReducer} from "./reducers/sponsorshipPackageReducer";
import {deadlineReducer} from "./reducers/deadlineReducer";
import {equipmentReducer} from "./reducers/equipmentReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    activeUser: activeUserReducer,
    activateUserProcess: activateUserProcessReducer,
    companies: companiesReducer,
    deadline: deadlineReducer,
    equipment: equipmentReducer,
    preferences: preferencesReducer,
    snackbar: snackbarReducer,
    sponsorshipPackages: sponsorshipPackagesReducer,
    users: usersReducer
});
export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers =
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducer, enhancer);