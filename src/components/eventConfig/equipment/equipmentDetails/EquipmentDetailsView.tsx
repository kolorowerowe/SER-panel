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
import {CardActions} from "@material-ui/core";
import {useCommonStyles} from "../../../../utils/commonStyles";
import {Equipment, PriceFields, TranslationFields, ValidatedField} from "../../../../declarations/types";

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
    equipment: Equipment;
    translationFields: TranslationFields;
    priceFields: PriceFields;
    maxCountPerCompanyField: ValidatedField;

    loading: boolean;
    error?: object;
    errorResponse?: object;

    onSaveEquipmentSubmit: () => void;
    onDeleteEquipmentSubmit: () => void;
}

const EquipmentDetailsView: React.FC<Props> = (props: Props) => {

    const {
        equipment: {
            id = ''
        } = {},
        translationFields,
        priceFields,
        maxCountPerCompanyField,

        loading,
        error,
        errorResponse,

        onSaveEquipmentSubmit,
        onDeleteEquipmentSubmit,
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();

    const styles = useCommonStyles();

    return (
        <DefaultCard title={t('sponsorshipPackage:equipmentDetails')}
                     backButton
                     error={error}
                     errorResponse={errorResponse}
                     loading={loading}>

            <Grid container spacing={2}>

                <LabeledData label={t('sponsorshipPackage:equipmentId')}
                             value={id}
                             displayGrid/>

                <Grid item xs={12}/>

                <Grid item xs={12} className={classes.editDataGrid}>
                    <Grid container spacing={3} className={classes.editDataContainer}>

                        <Grid item xs={12}>
                            <TranslationsComponent translationsField={translationFields}/>
                        </Grid>
                        <Grid item xs={12}>
                            <InputPriceComponent priceFields={priceFields}/>
                        </Grid>
                        <Grid item xs={12}>
                            <ValidatedTextField
                                label={t('sponsorshipPackage:maxCountPerCompany')}
                                field={maxCountPerCompanyField}
                                type="number"
                            />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <CardActions className={styles.cardActions}>
                <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.formElement}
                    onClick={onDeleteEquipmentSubmit}
                    disabled={loading}
                >
                    {t('general:delete')}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.formElement}
                    onClick={onSaveEquipmentSubmit}
                    disabled={loading}
                >
                    {t('general:save')}
                </Button>
            </CardActions>

        </DefaultCard>

    );
};


export default EquipmentDetailsView;

