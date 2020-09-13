import React, {useEffect, useMemo, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {useTranslation} from "react-i18next";
import CompanyDataComponentContainer from "./companyData/CompanyDataComponentContainer";
import {Divider, Tab, Tabs, Typography} from "@material-ui/core";
import CompanySponsorshipPackageComponentContainer
    from "./companySponsorshipPackage/CompanySponsorshipPackageComponentContainer";
import {useLocation, useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompanyDetailsAction} from "../../redux/actions/companiesActions";
import {RootState} from "../../redux/store";
import ErrorAlert from "../../generic/ErrorAlert";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "../../generic/ProgressBar";
import CompanySummaryComponent from "./companySummary/CompanySummary";


const CompanyComponent: React.FC = () => {

    const {t} = useTranslation();
    const navigate = useNavigate();
    const {companyId} = useParams();
    const location = useLocation();

    const {company, loading, error, errorResponse} = useSelector((state: RootState) => state.companies);
    const {authToken} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCompanyDetailsAction(companyId, authToken, dispatch);
    }, [companyId]);


    interface LinkTabProps {
        index: number;
        label?: string;
        component?: object;
        href: string;
    }


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
            component: <CompanySponsorshipPackageComponentContainer company={company}
                                                                    companyId={companyId}
                                                                    loading={loading}
                                                                    error={error}/>
        }, {
            label: t('equipment:additionalEquipment'),
            href: "additional-equipment",
            index: 3,
            component: <Typography>//TODO 13/09/20: Additional equipment </Typography>
        }, {
            label: t('catalogue:catalogue'),
            href: "catalogue",
            index: 4,
            component: <Typography>//TODO 13/09/20: Additional equipment </Typography>
        },
        {
            label: t('contract:contract'),
            href: "contract",
            index: 5,
            component: <Typography>//TODO 13/09/20: Additional equipment </Typography>
        }
    ];

    const getIndexOfCurrentLocation = (): number => {

        const lastPath = location.pathname.split("/").splice(-1)[0];

        const matchingSubRoute = companySubRoutes.find(subRoute => subRoute.href === lastPath);
        if (!matchingSubRoute) {
            console.log('No matched route, default company route');
            return 0;
        } else {
            console.log(`Matched route with index : ${matchingSubRoute.index}`);
            return matchingSubRoute.index;
        }
    }
    const currentLocation = useMemo(() => getIndexOfCurrentLocation(), []);
    const [value, setValue] = useState(currentLocation);


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
    };

    return (
        <div>
            <Tabs
                indicatorColor='primary'
                textColor='primary'
                value={value}
                variant="scrollable"
                scrollButtons="auto"
            >
                {
                    companySubRoutes.map(subRoute => <LinkTab key={subRoute.index}
                                                              index={subRoute.index}
                                                              href={subRoute.href}
                                                              label={subRoute.label}/>
                    )
                }
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
                        {companySubRoutes.slice(1).map(subRoute => <Route key={subRoute.index}
                                                                          path={subRoute.href}
                                                                          element={subRoute.component}/>)
                        }
                        {/*first element of companySubRoutes on the end, to match all*/}
                        <Route element={companySubRoutes[0].component}/>
                    </Routes>
                </Grid>
            </Grid>
        </div>
    );
};


export default CompanyComponent;
