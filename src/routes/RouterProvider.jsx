import React from 'react';
import {Route, Switch} from "react-router-dom";
import LoginComponentContainer from "../components/auth/login/LoginComponentContainer";
import HomeComponentContainer from "../components/home/HomeComponentContainer";
import ProfileComponentContainer from "../components/profile/ProfileComponentContainer";
import ProtectedRoute from "./ProtectedRoute";
import UsersComponentContainer from "../components/allUsers/UsersComponentContainer";
import ActivateAccountComponentContainer from "../components/auth/activateAccount/ActivateAccountComponentContainer";
import ProvideVerificationCodeComponentContainer
    from "../components/auth/activateAccount/ProvideVerificationCodeComponentContainer";
import SetupPasswordComponentContainer from "../components/auth/activateAccount/SetupPasswordComponentContainer";
import ActivationCompletedComponent from "../components/auth/activateAccount/ActivationCompletedComponent";
import UserDetailsComponentContainer from "../components/allUsers/userDetails/UserDetailsComponentContainer";
import CompanyDetailsComponentContainer
    from "../components/allCompanies/companyDetails/CompanyDetailsComponentContainer";
import CompaniesComponentContainer from "../components/allCompanies/CompaniesComponentContainer";
import SponsorshipPackagesComponentContainer
    from "../components/sponsorshipPackages/SponsorshipPackagesComponentContainer";
import SponsorshipPackageDetailsComponentContainer
    from "../components/sponsorshipPackages/sponsorshipPackageDetails/SponsorshipPackageDetailsComponentContainer";

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

            <ProtectedRoute path="/user/:userId"
                            component={UserDetailsComponentContainer}
            />

            <ProtectedRoute path="/user"
                            component={UsersComponentContainer}
            />

            <ProtectedRoute path="/company/:companyId"
                            component={CompanyDetailsComponentContainer}
            />

            <ProtectedRoute path="/company"
                            component={CompaniesComponentContainer}
            />

            <ProtectedRoute path="/sponsorship-packages/:sponsorshipPackageId"
                            component={SponsorshipPackageDetailsComponentContainer}
            />

            <ProtectedRoute path="/sponsorship-packages"
                            component={SponsorshipPackagesComponentContainer}
            />

            <ProtectedRoute path="/profile"
                            component={ProfileComponentContainer}
            />

            <ProtectedRoute path="/"
                            component={HomeComponentContainer}
            />
        </Switch>
    );
};


export default RouterProvider;
