import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import {useTranslation} from "react-i18next";
import CompaniesTable from "./CompaniesTable";

const CompaniesComponentView = (props) => {

    const {
        companies,
        loading,
        error,
        errorResponse,
    } = props;

    const {t} = useTranslation();

    return (
        <DefaultCard title={t('company:allCompanies')}
                     divider
                     loading={loading}
                     error={error}
                     errorResponse={errorResponse}
        >
            <CompaniesTable companies={companies}/>
        </DefaultCard>


    );
};


export default CompaniesComponentView;