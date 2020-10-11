import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "../../../../utils/useSnackbar";
import {useNavigate, useParams} from "react-router";
import useFieldValidation from "../../../../utils/useFieldValidation";
import {validatePositiveNumber} from "../../../../utils/Validators";
import usePriceFields from "../../../../utils/usePriceFields";
import useTranslationFields from "../../../../utils/useTranslationFields";
import {
    deleteEquipmentAction,
    fetchEquipmentDetailsAction,
    saveEquipmentAction
} from "../../../../redux/actions/equipmentActions";
import {RootState} from "../../../../redux/store";
import EquipmentDetailsView from "./EquipmentDetailsView";

const EquipmentDetailsContainer = () => {

    const {equipment, loading, error, errorResponse} = useSelector((state: RootState) => state.equipment);
    const {equipmentId} = useParams()
    const dispatch = useDispatch();
    const snackbar = useSnackbar();
    const navigate = useNavigate();
    const translationFields = useTranslationFields();
    const maxCountPerCompanyField = useFieldValidation('', validatePositiveNumber);
    const priceFields = usePriceFields();


    useEffect(() => {
        dispatch(fetchEquipmentDetailsAction(equipmentId));
    }, [equipmentId]);

    const onSaveEquipmentSubmit = () => {
        const saveEquipmentBody = {
            id: equipmentId,
            translations: translationFields.translations,
            prices: priceFields.prices,
            maxCountPerCompany: maxCountPerCompanyField.value,

        };

        dispatch(saveEquipmentAction(equipmentId, saveEquipmentBody, snackbar));

    };

    const onDeleteEquipmentSubmit = () => {
        dispatch(deleteEquipmentAction(equipmentId, snackbar, navigate));
    }


    useEffect(() => {
        const {
            translations = [],
            prices = [],
            maxCountPerCompany = 0,
        } = equipment || {};

        translationFields.setNewTranslations(translations);
        maxCountPerCompanyField.setValue(maxCountPerCompany);
        priceFields.setNewPrices(prices);
    }, [equipment])

    return (
        <EquipmentDetailsView equipment={equipment}
                              loading={loading}
                              error={error}
                              errorResponse={errorResponse}

                              translationFields={translationFields}
                              priceFields={priceFields}
                              maxCountPerCompanyField={maxCountPerCompanyField}

                              onSaveEquipmentSubmit={onSaveEquipmentSubmit}
                              onDeleteEquipmentSubmit={onDeleteEquipmentSubmit}
        />
    );
};


export default EquipmentDetailsContainer;
