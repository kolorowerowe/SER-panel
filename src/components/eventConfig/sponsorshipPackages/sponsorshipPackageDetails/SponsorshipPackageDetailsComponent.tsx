import React from 'react';
import DefaultCard from "../../../../generic/displayData/DefaultCard";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import ValidatedTextField from "../../../../generic/input/ValidatedTextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LabeledData from "../../../../generic/displayData/LabeledData";
import InputPriceComponent from "../../../../generic/input/InputPriceComponent";
import TranslationsComponent from "../../../../generic/input/TranslationsComponent";
import CheckboxInput from "../../../../generic/input/CheckboxInput";
import {CardActions} from "@material-ui/core";
import {useCommonStyles} from "../../../../styles/commonStyles";
import {PriceFields, SponsorshipPackage, TranslationFields, ValidatedField} from "../../../../declarations/types";

const useStyles = makeStyles((theme) => ({
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
    }
}));

type Props = {
    sponsorshipPackageDetails: SponsorshipPackage;
    sponsorshipPackageTranslationFields: TranslationFields;
    standSizeField: ValidatedField;
    maxCompaniesField: ValidatedField;
    priceFields: PriceFields;
    isAvailable: boolean;
    loading: boolean;
    setIsAvailable: (newIsAvailable: boolean) => void;
    onSaveSponsorshipPackageSubmit: () => void;
    onDeleteSponsorshipPackageSubmit: () => void;
}


const SponsorshipPackageDetailsComponent: React.FC<Props> = (props: Props) => {

    const {
        sponsorshipPackageDetails: {
            id
        } = {},
        sponsorshipPackageTranslationFields,
        standSizeField,
        maxCompaniesField,
        priceFields,
        isAvailable,
        setIsAvailable,
        loading,
        onSaveSponsorshipPackageSubmit,
        onDeleteSponsorshipPackageSubmit,
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();

    const styles = useCommonStyles();


    return (
        <DefaultCard>

            <Grid container spacing={2}>

                <LabeledData label={t('sponsorshipPackage:sponsorshipPackageId')}
                             value={id}
                             displayGrid/>

                <Grid item xs={12}/>

                <Grid item xs={12} className={classes.editDataGrid}>
                    <Grid container spacing={3} className={classes.editDataContainer}>

                        <Grid item xs={12}>
                            <TranslationsComponent translationsField={sponsorshipPackageTranslationFields}/>
                        </Grid>
                        <Grid item xs={12}>
                            <ValidatedTextField
                                label={t('general:standSize')}
                                field={standSizeField}
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ValidatedTextField
                                label={t('general:maxCompanies')}
                                field={maxCompaniesField}
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
                    </Grid>

                </Grid>
            </Grid>

            <CardActions className={styles.cardActions}>
                <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.formElement}
                    onClick={onDeleteSponsorshipPackageSubmit}
                    disabled={loading}
                >
                    {t('sponsorshipPackage:deleteSponsorshipPackage')}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.formElement}
                    onClick={onSaveSponsorshipPackageSubmit}
                    disabled={loading}
                >
                    {t('sponsorshipPackage:saveSponsorshipPackage')}
                </Button>
            </CardActions>

        </DefaultCard>

    );
};

export default SponsorshipPackageDetailsComponent;