import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CompaniesTable from "./CompaniesTable";
import Divider from "@material-ui/core/Divider";

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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <DefaultCard title={t('company:allCompanies')}>
                    <Divider className={classes.divider}/>
                    <CompaniesTable companies={companies}/>
                </DefaultCard>
            </Grid>
        </Grid>

    );
};


export default CompaniesComponentView;

const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: 20,
        marginBottom: 20
    }
}));
