import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {useTranslation} from "react-i18next";
import CompanyDetailsComponentContainer from "./companyDetails/CompanyDetailsComponentContainer";
import {Divider, Tab, Tabs, Typography} from "@material-ui/core";
import CompanySponsorshipPackageComponentContainer
    from "./companySponsorshipPackage/CompanySponsorshipPackageComponentContainer";
import {useNavigate, useParams} from "react-router";
import CompanySummaryComponent from "./companySummary/CompanySummary";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompanyDetailsAction} from "../../redux/actions/companiesActions";
import {RootState} from "../../redux/store";
import ErrorAlert from "../../generic/ErrorAlert";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "../../generic/ProgressBar";


const CompanyComponent: React.FC = () => {

    const {t} = useTranslation();
    const navigate = useNavigate();
    const {companyId} = useParams();
    const [value, setValue] = useState(0);

    const {company, loading, error, errorResponse} = useSelector((state: RootState) => state.companies);
    const {authToken} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCompanyDetailsAction(companyId, authToken, dispatch);
    }, [companyId]);

    interface LinkTabProps {
        index: number;
        label?: string;
        href: string;
    }

    const LinkTab: React.FC<LinkTabProps> = ({href, label, index}: LinkTabProps) => {
        return (
            <Tab
                component="a"
                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
                    event.preventDefault();
                    setValue(index);
                    navigate(`/company/${companyId}/${href}`);
                }}
                label={label}
            />
        );
    }

    return (
        <div>
            <Tabs
                indicatorColor='primary'
                textColor='primary'
                value={value}
                variant="scrollable"
                scrollButtons="auto"
                centered
            >
                <LinkTab label={t('company:companySummary')} href="/" index={0}/>
                <LinkTab label={t('company:companyData')} href="data" index={1}/>
                <LinkTab label={t('sponsorshipPackage:sponsorshipPackage')} href="sponsorship-package" index={2}/>
                <LinkTab label={t('equipment:additionalEquipment')} href="additional-equipment" index={3}/>
                <LinkTab label={t('equipment:catalogue')} href="catalogue" index={4}/>
                <LinkTab label={t('contract:contract')} href="contract" index={5}/>
            </Tabs>

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Divider/>
                </Grid>

                <ErrorAlert error={error}
                            errorResponse={errorResponse}
                            displayGrid
                />

                <ProgressBar loading={loading} displayGrid/>
                <Grid item xs={12}>


                    <Routes>
                        <Route path="data"
                               element={
                                   <CompanyDetailsComponentContainer companyId={companyId}
                                                                     company={company}
                                                                     loading={loading}/>
                               }/>
                        <Route path="sponsorship-package"
                               element={
                                   <CompanySponsorshipPackageComponentContainer company={company}
                                                                                companyId={companyId}/>
                               }/>
                        <Route path="additional-equipment"
                               element={
                                   <Typography>//TODO 07/09/20: Additional equipment </Typography>
                               }/>
                        <Route path="catalogue"
                               element={
                                   <Typography>//TODO 07/09/20: catalogue </Typography>
                               }/>
                        <Route path="contract"
                               element={
                                   <Typography>//TODO 07/09/20: contract </Typography>
                               }/>
                        <Route element={
                            <CompanySummaryComponent companyId={companyId}
                                                     company={company}/>
                        }/>
                    </Routes>
                </Grid>
            </Grid>
        </div>
    );
};


export default CompanyComponent;
