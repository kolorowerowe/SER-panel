import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {useTranslation} from "react-i18next";
import CompanyDetailsComponentContainer from "./companyDetails/CompanyDetailsComponentContainer";
import {Divider, Tab, Tabs, Typography} from "@material-ui/core";
import CompanySponsorshipPackageComponentContainer
    from "./companySponsorshipPackage/CompanySponsorshipPackageComponentContainer";
import {useNavigate, useParams} from "react-router";
import CompanySummaryComponent from "./companySummary/CompanySummary";


const CompanyComponent: React.FC = () => {


    const {t} = useTranslation();
    const navigate = useNavigate();
    const {companyId} = useParams();
    const [value, setValue] = useState(0);

    interface LinkTabProps {
        index: number;
        label?: string;
        href: string;
        selected?: boolean;
    }

    function LinkTab({href, label, selected, index}: LinkTabProps) {
        return (
            <Tab
                component="a"
                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
                    event.preventDefault();
                    setValue(index);
                    navigate(`/company/${companyId}/${href}`);
                }}
                label={label}
                selected={selected}
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
                <LinkTab label={t('company:companyDetails')} href="details" index={1}/>
                <LinkTab label={t('sponsorshipPackage:sponsorshipPackage')} href="sponsorship-package" index={2}/>
                <LinkTab label={t('equipment:additionalEquipment')} href="additional-equipment" index={3}/>
                <LinkTab label={t('equipment:catalogue')} href="catalogue" index={4}/>
                <LinkTab label={t('contract:contract')} href="contract" index={5}/>
            </Tabs>
            <Divider style={{marginBottom:20}}/>

            <Routes>
                <Route path="details" element={<CompanyDetailsComponentContainer companyId={companyId}/>}/>
                <Route path="sponsorship-package" element={<CompanySponsorshipPackageComponentContainer  companyId={companyId}/>}/>
                <Route path="additional-equipment" element={<Typography>//TODO 07/09/20: Additional equipment </Typography>}/>
                <Route path="catalogue" element={<Typography>//TODO 07/09/20: catalogue </Typography>}/>
                <Route path="contract" element={<Typography>//TODO 07/09/20: contract </Typography>}/>
                <Route element={<CompanySummaryComponent companyId={companyId}/>}/>
            </Routes>
        </div>
    );
};


export default CompanyComponent;
