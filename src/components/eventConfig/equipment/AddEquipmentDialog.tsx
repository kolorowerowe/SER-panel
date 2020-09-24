import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useTranslation} from "react-i18next";
import useFieldValidation from "../../../utils/useFieldValidation";
import {validatePositiveNumber} from "../../../utils/Validators";
import ValidatedTextField from "../../../generic/input/ValidatedTextField";
import Grid from "@material-ui/core/Grid";
import usePriceFields from "../../../utils/usePriceFields";
import InputPriceComponent from "../../../generic/input/InputPriceComponent";
import {Divider} from "@material-ui/core";
import useTranslationFields from "../../../utils/useTranslationFields";
import TranslationsComponent from "../../../generic/input/TranslationsComponent";
import {NewEquipmentBody} from "../../../declarations/types";


type Props = {
    addEquipmentDialogOpen: boolean;
    setAddEquipmentDialogOpen: (isOpen: boolean) => void;
    handleAddEquipmentSubmit: (equipmentBody: NewEquipmentBody) => void;
}

const AddEquipmentDialog: React.FC<Props> = (props: Props) => {

    const {
        addEquipmentDialogOpen,
        setAddEquipmentDialogOpen,
        handleAddEquipmentSubmit
    } = props;

    const {t} = useTranslation();

    const equipmentTranslationFields = useTranslationFields();
    const priceFields = usePriceFields();
    const maxCountPerCompanyField = useFieldValidation('', validatePositiveNumber);


    const handleSubmit = () => {

        if (maxCountPerCompanyField.validate() == null) {

            const newEquipmentBody = {
                translations: equipmentTranslationFields.translations,
                maxCountPerCompany: maxCountPerCompanyField.value,
                prices: priceFields.prices
            };

            handleAddEquipmentSubmit(newEquipmentBody);
        }

    }

    return (
        <Dialog open={addEquipmentDialogOpen}
                onClose={() => setAddEquipmentDialogOpen(false)}
                fullWidth
                maxWidth={'md'}>
            <DialogTitle>
                {t('sponsorshipPackage:addNewEquipment')}
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <TranslationsComponent translationsField={equipmentTranslationFields}/>
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

            </DialogContent>
            <DialogActions>
                <Button onClick={() => setAddEquipmentDialogOpen(false)}
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

export default AddEquipmentDialog;

