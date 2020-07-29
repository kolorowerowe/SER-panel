import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import ValidatedTextField from "../../generic/ValidatedTextField";
import ErrorAlert from "../../generic/ErrorAlert";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import ProgressBar from "../../generic/ProgressBar";
import moment from "moment";


const CompanyDetailsComponentView = (props) => {

    const {
        nameField,
        contactPhoneField,
        taxIdField,
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


                <Grid item xs={12}>
                    <Typography className={classes.secondaryField}>
                        {t('company:companyId')}: {id}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.secondaryField}>
                        {t('company:primaryUserId')}: {primaryUserId}
                    </Typography>
                    <Typography className={classes.secondaryField}>
                        {t('company:createdDate')}: {moment(companyCreatedDate).format('LL')} ({moment(companyCreatedDate).fromNow()})
                    </Typography>
                </Grid>

                <Grid item xs={12}/>

                <Grid item xs={12} className={classes.editDataGrid}>
                    <Grid container spacing={2} className={classes.editDataContainer}>
                        <Grid item xs={12}>
                            <ValidatedTextField
                                label={t('company:companyName')}
                                name="companyName"
                                field={nameField}
                                className={classes.formElement}
                                variant={'standard'}
                                disabled
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <ValidatedTextField
                                label={t('company:contactPhone')}
                                name="contactPhone"
                                field={contactPhoneField}
                                className={classes.formElement}
                                disabled={loading}
                                variant={'standard'}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <ValidatedTextField
                                label={t('company:taxId')}
                                name="taxId"
                                field={taxIdField}
                                className={classes.formElement}
                                variant={'standard'}
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
