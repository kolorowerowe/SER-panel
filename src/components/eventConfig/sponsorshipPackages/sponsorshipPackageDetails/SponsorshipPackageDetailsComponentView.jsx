import React from 'react';
import DefaultCard from "../../../../generic/displayData/DefaultCard";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import ValidatedTextField from "../../../../generic/input/ValidatedTextField";
import ErrorAlert from "../../../../generic/ErrorAlert";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ProgressBar from "../../../../generic/ProgressBar";
import LabeledData from "../../../../generic/displayData/LabeledData";
import InputPriceComponent from "../../../../generic/input/InputPriceComponent";
import SponsorshipPackageTranslations from "../SponsorshipPackageTranslations";
import CheckboxInput from "../../../../generic/input/CheckboxInput";

const SponsorshipPackageDetailsComponentView = (props) => {

    const {
        sponsorshipPackageDetails: {
            id
        } = {},
        sponsorshipPackageTranslationFields,
        standSizeField,
        priceFields,
        isAvailable,
        setIsAvailable,

        loading,
        error,
        errorResponse,

        onSaveSponsorshipPackageSubmit,
        onDeleteSponsorshipPackageSubmit,
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();


    return (
        <DefaultCard title={t('sponsorshipPackage:sponsorshipPackageDetails')} backButton>
            <Grid container spacing={2}>

                <ErrorAlert error={error}
                            errorResponse={errorResponse}
                            className={classes.formElement} displayGrid/>

                <ProgressBar loading={loading} displayGrid/>


                <LabeledData label={t('sponsorshipPackage:sponsorshipPackageId')}
                             value={id}
                             displayGrid/>

                <Grid item xs={12}/>

                <Grid item xs={12} className={classes.editDataGrid}>
                    <Grid container spacing={3} className={classes.editDataContainer}>

                        <Grid item xs={12}>
                            <SponsorshipPackageTranslations
                                sponsorshipPackageTranslationFields={sponsorshipPackageTranslationFields}/>
                        </Grid>
                        <Grid item xs={12}>
                            <ValidatedTextField
                                label={t('general:standSize')}
                                field={standSizeField}
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputPriceComponent priceFields={priceFields}/>
                        </Grid>
                        <Grid item xs={12}>
                            <CheckboxInput checked={isAvailable}
                                           onChange={e => setIsAvailable(e.target.checked)}
                                           label={t('sponsorshipPackage:isAvailable')}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="secondary"
                                className={classes.formElement}
                                onClick={onDeleteSponsorshipPackageSubmit}
                                disabled={loading}
                            >
                                {t('sponsorshipPackage:deleteSponsorshipPackage')}
                            </Button>

                        </Grid>

                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.formElement}
                                onClick={onSaveSponsorshipPackageSubmit}
                                disabled={loading}
                            >
                                {t('sponsorshipPackage:saveSponsorshipPackage')}
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </DefaultCard>

    );
};


export default SponsorshipPackageDetailsComponentView;

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
