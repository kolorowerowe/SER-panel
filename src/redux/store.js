import {combineReducers, createStore} from 'redux';
import {greetingReducer} from "./reducers/generalReducer";

export const store = createStore(combineReducers({
    greeting: greetingReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());