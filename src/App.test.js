import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter} from "react-router-dom";
import {createBrowserHistory} from "history";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
    auth: {},
    activeUser: {},
    activateUserProcess: {},
    companies: {},
    deadline: {},
    equipment: {},
    eventConfig: {},
    preferences: {
        languageCode: "pl"
    },
    snackbar: {},
    sponsorshipPackages: {},
    statistics: {},
    users: {}
};

const customHistory = createBrowserHistory();


test('renders learn react link', () => {
    const store = mockStore(initialState);
    const div = document.createElement('div');
    ReactDOM.render((
        <Provider store={store}>
            <BrowserRouter history={customHistory}>
                <App/>
            </BrowserRouter>
        </Provider>), div);
    ReactDOM.unmountComponentAtNode(div);
});
