import React from 'react';
import {useTranslation} from "react-i18next";
import useFieldValidation from "../../../../utils/useFieldValidation";
import {validatePositiveNumber} from "../../../../utils/Validators";
import ValidatedTextField from "../../../../generic/input/ValidatedTextField";
import Grid from "@material-ui/core/Grid";
import usePriceFields from "../../../../utils/usePriceFields";
import InputPriceComponent from "../../../../generic/input/InputPriceComponent";
import useTranslationFields from "../../../../utils/useTranslationFields";
import TranslationsComponent from "../../../../generic/input/TranslationsComponent";
import {NewEquipmentBody} from "../../../../declarations/types";
import DialogComponent from "../../../../generic/input/DialogComponent";


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

    const handleSubmit = (): void => {

        if (maxCountPerCompanyField.validate() == null) {

            const newEquipmentBody: NewEquipmentBody = {
                translations: equipmentTranslationFields.translations,
                maxCountPerCompany: maxCountPerCompanyField.value as number,
                prices: priceFields.prices
            };

            handleAddEquipmentSubmit(newEquipmentBody);
        }

    }

    return (
        <DialogComponent dialogOpen={addEquipmentDialogOpen}
                         setDialogOpen={setAddEquipmentDialogOpen}
                         onSubmit={handleSubmit}
                         title={t('sponsorshipPackage:addNewEquipment')}>
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

        </DialogComponent>
    );
}

export default AddEquipmentDialog;

