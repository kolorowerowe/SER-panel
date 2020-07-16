import React from 'react';
import {Route, Switch} from "react-router-dom";
import LoginComponentContainer from "../components/auth/LoginComponentContainer";
import MenuComponentContainer from "../components/menu/MenuComponentContainer";
import ProfileComponentContainer from "../components/profile/ProfileComponentContainer";
import ProtectedRoute from "./ProtectedRoute";

const RouterProvider = () => {


    return (
        <Switch>
            <Route path="/login"
                   component={LoginComponentContainer}
            />
            <ProtectedRoute path="/profile"
                   component={ProfileComponentContainer}
            />
            <ProtectedRoute path="/"
                   component={MenuComponentContainer}
            />
        </Switch>
    );
};


export default RouterProvider;
