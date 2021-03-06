import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useTranslation} from "react-i18next";
import useFieldValidation from "../../../../utils/useFieldValidation";
import {validatePositiveNumber, validateStandSize} from "../../../../utils/Validators";
import ValidatedTextField from "../../../../generic/input/ValidatedTextField";
import Grid from "@material-ui/core/Grid";

import usePriceFields from "../../../../utils/usePriceFields";
import InputPriceComponent from "../../../../generic/input/InputPriceComponent";
import useTranslationFields from "../../../../utils/useTranslationFields";
import TranslationsComponent from "../../../../generic/input/TranslationsComponent";
import {Divider} from "@material-ui/core";

const AddSponsorshipPackageDialog = props => {

    const {
        addSponsorshipPackageDialogOpen,
        setAddSponsorshipPackageDialogOpen,
        handleAddSponsorshipPackageSubmit
    } = props;

    const {t} = useTranslation();

    const sponsorshipPackageTranslationFields = useTranslationFields();
    const standSizeField = useFieldValidation(0, validatePositiveNumber);
    const maxCompaniesField = useFieldValidation(0, validatePositiveNumber);
    const priceFields = usePriceFields();


    const handleSubmit = () => {

        if (standSizeField.validate() == null) {

            const newSponsorshipPackageBody = {
                translations: sponsorshipPackageTranslationFields.translations,
                standSize: standSizeField.value,
                maxCompanies: maxCompaniesField.value,
                prices: priceFields.prices
            };

            handleAddSponsorshipPackageSubmit(newSponsorshipPackageBody);
        }

    }

    return (
        <Dialog open={addSponsorshipPackageDialogOpen}
                onClose={() => setAddSponsorshipPackageDialogOpen(false)}
                fullWidth
                maxWidth={'md'}>
            <DialogTitle>
                {t('sponsorshipPackage:addNewSponsorshipPackage')}
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <TranslationsComponent translationsField={sponsorshipPackageTranslationFields}/>
                    </Grid>
                    <Grid item xs={12} >
                        <ValidatedTextField
                            label={t('general:standSize')}
                            field={standSizeField}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <ValidatedTextField
                            label={t('general:maxCompanies')}
                            field={maxCompaniesField}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputPriceComponent priceFields={priceFields}/>
                    </Grid>
                </Grid>

            </DialogContent>
            <DialogActions>
                <Button onClick={() => setAddSponsorshipPackageDialogOpen(false)}
                        color="primary"
                        variant="outlined"
                >
                    {t('general:cancel')}
                </Button>
                <Button onClick={handleSubmit}
                        color="primary"
                        variant="contained"
                >
                    {t('general:add')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddSponsorshipPackageDialog;

