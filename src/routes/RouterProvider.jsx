import React from 'react';
import {Route, Switch} from "react-router-dom";
import LoginComponentContainer from "../components/auth/login/LoginComponentContainer";
import MenuComponentContainer from "../components/menu/MenuComponentContainer";
import ProfileComponentContainer from "../components/profile/ProfileComponentContainer";
import ProtectedRoute from "./ProtectedRoute";
import UsersComponentContainer from "../components/users/UsersComponentContainer";
import ActivateAccountComponentContainer from "../components/auth/activateAccount/ActivateAccountComponentContainer";
import ProvideVerificationCodeComponentContainer
    from "../components/auth/activateAccount/ProvideVerificationCodeComponentContainer";
import SetupPasswordComponentContainer from "../components/auth/activateAccount/SetupPasswordComponentContainer";
import ActivationCompletedComponent from "../components/auth/activateAccount/ActivationCompletedComponent";

const RouterProvider = () => {


    return (
        <Switch>
            <Route path="/login"
                   component={LoginComponentContainer}
            />

            <Route path="/activate/email"
                   component={ActivateAccountComponentContainer}
            />

            <Route path="/activate/verify"
                   component={ProvideVerificationCodeComponentContainer}
            />

            <Route path="/activate/password"
                   component={SetupPasswordComponentContainer}
            />

            <Route path="/activate/done"
                   component={ActivationCompletedComponent}
            />

            <ProtectedRoute path="/users"
                            component={UsersComponentContainer}
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
