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
    from "../components/eventConfig/sponsorshipPackages/all/SponsorshipPackagesComponentContainer";
import SponsorshipPackageContainer
    from "../components/eventConfig/sponsorshipPackages/sponsorshipPackageDetails/SponsorshipPackageContainer";
import CompanyComponent from "../components/company/CompanyComponent";
import DeadlineComponentContainer from "../components/eventConfig/deadline/DeadlineComponentContainer";
import HelpComponentContainer from "../components/help/HelpComponentContainer";
import EquipmentComponentContainer from "../components/eventConfig/equipment/all/EquipmentComponentContainer";
import EquipmentDetailsContainer from "../components/eventConfig/equipment/equipmentDetails/EquipmentDetailsContainer";
import EventConfigComponentContainer from "../components/eventConfig/eventConfig/EventConfigComponentContainer";
import DeveloperComponent from "../components/developer/DeveloperComponent";
import DataProcessingInfoComponent from "../components/help/DataProcessingInfoComponentContainer";

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

            <ProtectedRoute path="/company/:companyId/*"
                            element={CompanyComponent}
            />

            <ProtectedRoute path="/company"
                            element={CompaniesComponentContainer}
            />

            <ProtectedRoute path="/user/:userId"
                            element={UserDetailsComponentContainer}
            />

            <ProtectedRoute path="/user"
                            element={UsersComponentContainer}
            />


            <ProtectedRoute path="/event-config"
                            element={EventConfigComponentContainer}
            />

            <ProtectedRoute path="/deadline"
                            element={DeadlineComponentContainer}
            />

            <ProtectedRoute path="/sponsorship-package/:sponsorshipPackageId/*"
                            element={SponsorshipPackageContainer}
            />

            <ProtectedRoute path="/sponsorship-package"
                            element={SponsorshipPackagesComponentContainer}
            />

            <ProtectedRoute path="/equipment/:equipmentId"
                            element={EquipmentDetailsContainer}
            />

            <ProtectedRoute path="/equipment"
                            element={EquipmentComponentContainer}
            />

            <ProtectedRoute path="/profile"
                            element={ProfileComponentContainer}
            />

            <Route path="/developer"
                   element={<DeveloperComponent/>}/>

            <Route path="/help"
                   element={<HelpComponentContainer/>}/>

            <Route path="/data-processing-info"
                   element={<DataProcessingInfoComponent/>}/>

            <ProtectedRoute path="/"
                            element={HomeComponentContainer}
            />
        </Routes>
    );
};


export default RouterProvider;
