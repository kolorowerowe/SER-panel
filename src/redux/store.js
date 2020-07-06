import {combineReducers, createStore} from 'redux';
import {greetingReducer} from "./reducers/generalReducer";
import {preferencesReducer} from "./reducers/preferencesReducer";

export const store = createStore(combineReducers({
    greeting: greetingReducer,
    preferences: preferencesReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());