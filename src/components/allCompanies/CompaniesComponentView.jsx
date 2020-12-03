import React from 'react';
import DefaultCard from "../../generic/displayData/DefaultCard";
import {useTranslation} from "react-i18next";
import CompaniesTable from "./CompaniesTable";

const CompaniesComponentView = (props) => {

    const {
        companies,
        loading,
        error,
        errorResponse,
        handleCompaniesExport
    } = props;

    const {t} = useTranslation();

    const actionMenu = [{
        name: t('company:exportCompanies'),
        onClick: handleCompaniesExport
    }]

    return (
        <DefaultCard title={t('company:allCompanies')}
                     divider
                     loading={loading}
                     error={error}
                     errorResponse={errorResponse}
                     actionMenu={actionMenu}
        >
            <CompaniesTable companies={companies}/>
        </DefaultCard>


    );
};


export default CompaniesComponentView;