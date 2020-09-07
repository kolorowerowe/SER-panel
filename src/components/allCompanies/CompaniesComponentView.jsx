import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
import CompaniesTable from "./CompaniesTable";

const CompaniesComponentView = (props) => {

    const {
        companies,
        loading,
        error,
        errorResponse,
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();

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

const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: 20,
        marginBottom: 20
    }
}));
