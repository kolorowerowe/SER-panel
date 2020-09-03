import React from 'react';
import DefaultCard from "../../../generic/DefaultCard";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import ValidatedTextField from "../../../generic/input/ValidatedTextField";
import ErrorAlert from "../../../generic/ErrorAlert";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ProgressBar from "../../../generic/ProgressBar";
import moment from "moment";
import DataDisplay from "../../../generic/DataDisplay";


const CompanyDetailsComponentView = (props) => {

    const {
        companyNameField,
        contactPhoneField,
        taxIdField,
        streetField,
        buildingNumberField,
        flatNumberField,
        cityField,
        postalCodeField,
        onSaveCompanySubmit,
        company: {
            id,
            primaryUserId,
            companyCreatedDate
        } = {},
        loading,
        error,
        errorResponse,
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();


    return (
        <DefaultCard title={t('company:companyDetails')} backButton>
            <Grid container spacing={2}>

                <ErrorAlert error={error}
                            errorResponse={errorResponse}
                            className={classes.formElement} displayGrid/>

                <ProgressBar loading={loading} displayGrid/>


                <DataDisplay label={t('company:companyId')}
                             value={id}
                             displayGrid/>

                <DataDisplay label={t('company:primaryUserId')}
                             value={primaryUserId}
                             displayGrid/>
                <DataDisplay label={t('company:createdDate')}
                             value={moment(companyCreatedDate).format('LL') + " " + moment(companyCreatedDate).fromNow()}
                             displayGrid/>

                <Grid item xs={12}/>

                <Grid item xs={12} className={classes.editDataGrid}>
                    <Grid container spacing={2} className={classes.editDataContainer}>
                        <Grid item xs={12}>
                            <ValidatedTextField
                                label={t('company:companyName')}
                                name="companyName"
                                field={companyNameField}
                                className={classes.formElement}
                                disabled
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <ValidatedTextField
                                label={t('company:contactPhone')}
                                name="contactPhone"
                                field={contactPhoneField}
                                className={classes.formElement}
                                disabled={loading}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ValidatedTextField
                                label={t('company:taxId')}
                                name="taxId"
                                field={taxIdField}
                                className={classes.formElement}
                                disabled={loading}
                            />
                        </Grid>

                        <Grid item xs={12}/>

                        <Grid item xs={12}>
                            <ValidatedTextField
                                label={t('company:street')}
                                name="street"
                                field={streetField}
                                className={classes.formElement}
                                disabled={loading}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ValidatedTextField
                                label={t('company:buildingNumber')}
                                name="buildingNumber"
                                field={buildingNumberField}
                                className={classes.formElement}
                                disabled={loading}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ValidatedTextField
                                label={t('company:flatNumber')}
                                name="flatNumber"
                                field={flatNumberField}
                                className={classes.formElement}
                                disabled={loading}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ValidatedTextField
                                label={t('company:postalCode')}
                                name="postalCode"
                                field={postalCodeField}
                                className={classes.formElement}
                                disabled={loading}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <ValidatedTextField
                                label={t('company:city')}
                                name="city"
                                field={cityField}
                                className={classes.formElement}
                                disabled={loading}
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.formElement}
                                onClick={onSaveCompanySubmit}
                                disabled={loading}
                            >
                                {t('company:saveCompany')}
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </DefaultCard>

    );
};


export default CompanyDetailsComponentView;

const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: 20,
        marginBottom: 20
    },
    formElement: {
        marginTop: 20
    },
    gridItem: {
        display: 'grid'
    },
    editDataGrid: {
        display: 'flex',
        justifyContent: 'center'
    },
    editDataContainer: {
        maxWidth: 600,
    },
    deleteButton: {
        marginTop: 20,
        color: theme.palette.error.main
    }
}));
