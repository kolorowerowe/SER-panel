import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useTranslation} from "react-i18next";
import useFieldValidation from "../../utils/useFieldValidation";
import {validateStandSize} from "../../utils/Validators";
import ValidatedTextField from "../../generic/input/ValidatedTextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

import usePriceFields from "../../utils/usePriceFields";
import InputPriceComponent from "../../generic/input/InputPriceComponent";
import useSponsorshipPackageTranslationFields from "../../utils/useSponsorshipPackageTranslationFields";
import SponsorshipPackageTranslations from "./SponsorshipPackageTranslations";

const AddSponsorshipPackageDialog = props => {

    const {
        addSponsorshipPackageDialogOpen,
        setAddSponsorshipPackageDialogOpen,
        handleAddSponsorshipPackageSubmit
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();

    const sponsorshipPackageTranslationFields = useSponsorshipPackageTranslationFields();
    const standSizeField = useFieldValidation('', validateStandSize);
    const priceFields = usePriceFields();


    const handleSubmit = () => {

        if (standSizeField.validate() == null) {

            const newSponsorshipPackageBody = {
                translations: sponsorshipPackageTranslationFields.translations,
                standSize: standSizeField.value,
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
            <DialogContent>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <SponsorshipPackageTranslations sponsorshipPackageTranslationFields={sponsorshipPackageTranslationFields}/>
                    </Grid>
                    <Grid item xs={12} >
                        <ValidatedTextField
                            label={t('general:standSize')}
                            field={standSizeField}
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

const useStyles = makeStyles((theme) => ({
    gridItem: {
        display: 'grid'
    }
}));

