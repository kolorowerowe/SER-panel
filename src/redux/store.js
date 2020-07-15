import {combineReducers, createStore} from 'redux';
import {activeUserReducer} from "./reducers/activeUserReducer";
import {preferencesReducer} from "./reducers/preferencesReducer";
import {authReducer} from "./reducers/authReducer";

export const store = createStore(combineReducers({
    auth: authReducer,
    activeUser: activeUserReducer,
    preferences: preferencesReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());