import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import CompanyDataComponentContainer from "./companyData/CompanyDataComponentContainer";
import {Typography} from "@material-ui/core";
import CompanySponsorshipPackageComponent from "./companySponsorshipPackage/CompanySponsorshipPackageComponent";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompanyDetailsAction} from "../../redux/actions/companiesActions";
import {RootState} from "../../redux/store";

import CompanySummaryComponent from "./companySummary/CompanySummary";
import SubRouteTabs from '../../generic/SubRouteTabs';
import CatalogComponentContainer from "./catalog/CatalogComponentContainer";


const CompanyComponent: React.FC = () => {

    const {t} = useTranslation();
    const {companyId} = useParams();

    const {company, loading, error, errorResponse} = useSelector((state: RootState) => state.companies);
    const {authToken} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCompanyDetailsAction(companyId, authToken, dispatch);
    }, [companyId]);


    const companySubRoutes = [
        {
            label: t('company:companySummary'),
            href: "/",
            index: 0,
            component: <CompanySummaryComponent companyId={companyId}
                                                company={company}/>
        },
        {
            label: t('company:companyData'),
            href: "data",
            index: 1,
            component: <CompanyDataComponentContainer companyId={companyId}
                                                      company={company}
                                                      loading={loading}/>
        }, {
            label: t('sponsorshipPackage:sponsorshipPackage'),
            href: "sponsorship-package",
            index: 2,
            component: <CompanySponsorshipPackageComponent company={company}
                                                           companyId={companyId}
                                                           loading={loading}
                                                           error={error}/>
        }, {
        //     label: t('equipment:additionalEquipment'),
        //     href: "additional-equipment",
        //     index: 3,
        //     component: <Typography>//TODO 13/09/20: Additional equipment </Typography>
        // }, {
            label: t('catalog:catalog'),
            href: "catalog",
            index: 3,
            component: <CatalogComponentContainer companyId={companyId}
                                                  company={company}
                                                  loading={loading}/>
        },
        // {
        //     label: t('contract:contract'),
        //     href: "contract",
        //     index: 5,
        //     component: <Typography>//TODO 13/09/20: contract </Typography>
        // }
    ];


    return (
        <SubRouteTabs subRoutes={companySubRoutes}
                      baseUrl={`/company/${companyId}`}
                      loading={loading}
                      error={error}
                      errorResponse={errorResponse}/>
    );
};


export default CompanyComponent;
