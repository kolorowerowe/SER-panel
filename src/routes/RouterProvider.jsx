import React from 'react';
import {Route, Switch} from "react-router-dom";
import LoginComponentContainer from "../components/auth/LoginComponentContainer";
import MenuComponentContainer from "../components/menu/MenuComponentContainer";
import SettingsComponentContainer from "../components/settings/SettingsComponentContainer";
import ProtectedRoute from "./ProtectedRoute";

const RouterProvider = () => {


    return (
        <Switch>
            <Route path="/login"
                   component={LoginComponentContainer}
            />
            <Route path="/settings"
                   component={SettingsComponentContainer}
            />
            <ProtectedRoute path="/"
                   component={MenuComponentContainer}
            />
        </Switch>
    );
};


export default RouterProvider;
