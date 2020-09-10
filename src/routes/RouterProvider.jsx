import React from 'react';
import {Route, Routes} from "react-router-dom";
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
import CompaniesComponentContainer from "../components/allCompanies/CompaniesComponentContainer";
import SponsorshipPackagesComponentContainer
    from "../components/eventConfig/sponsorshipPackages/SponsorshipPackagesComponentContainer";
import SponsorshipPackageDetailsComponentContainer
    from "../components/eventConfig/sponsorshipPackages/sponsorshipPackageDetails/SponsorshipPackageDetailsComponentContainer";
import CompanyComponent from "../components/company/CompanyComponent";
import DeadlineComponentContainer from "../components/eventConfig/deadline/DeadlineComponentContainer";

const RouterProvider = () => {


    return (
        <Routes>
            <Route path="/login"
                   element={<LoginComponentContainer/>}
            />

            <Route path="/activate/email"
                   element={<ActivateAccountComponentContainer/>}
            />

            <Route path="/activate/verify"
                   element={<ProvideVerificationCodeComponentContainer/>}
            />

            <Route path="/activate/password"
                   element={<SetupPasswordComponentContainer/>}
            />

            <Route path="/activate/done"
                   element={<ActivationCompletedComponent/>}
            />

            <ProtectedRoute path="/user/:userId"
                            element={UserDetailsComponentContainer}
            />

            <ProtectedRoute path="/user"
                            element={UsersComponentContainer}
            />

            <ProtectedRoute path="/company/:companyId/*"
                            element={CompanyComponent}
            />

            <ProtectedRoute path="/company"
                            element={CompaniesComponentContainer}
            />

            <ProtectedRoute path="/sponsorship-package/:sponsorshipPackageId"
                            element={SponsorshipPackageDetailsComponentContainer}
            />

            <ProtectedRoute path="/sponsorship-package"
                            element={SponsorshipPackagesComponentContainer}
            />

            <ProtectedRoute path="/deadline"
                            element={DeadlineComponentContainer}
            />

            <ProtectedRoute path="/profile"
                            element={ProfileComponentContainer}
            />

            <ProtectedRoute path="/"
                            element={HomeComponentContainer}
            />
        </Routes>
    );
};


export default RouterProvider;
