import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "../../../../utils/useSnackbar";
import {useNavigate, useParams} from "react-router";
import useFieldValidation from "../../../../utils/useFieldValidation";
import {validateStandSize} from "../../../../utils/Validators";
import {
    deleteSponsorshipPackageAction,
    fetchSponsorshipPackageDetailsAction,
    saveSponsorshipPackageAction
} from "../../../../redux/actions/sponsorshipPackagesActions";
import SponsorshipPackageDetailsComponentView from "./SponsorshipPackageDetailsComponentView";
import usePriceFields from "../../../../utils/usePriceFields";
import useSponsorshipPackageTranslationFields from "../../../../utils/useSponsorshipPackageTranslationFields";

const SponsorshipPackageDetailsComponentContainer = () => {

    const {sponsorshipPackageDetails, loading, error, errorResponse} = useSelector(state => state.sponsorshipPackages);
    const {authToken} = useSelector(state => state.auth);
    const {sponsorshipPackageId} = useParams()
    const dispatch = useDispatch();
    const snackbar = useSnackbar();
    const navigate = useNavigate();


    useEffect(() => {
        fetchSponsorshipPackageDetailsAction(sponsorshipPackageId, authToken, dispatch);
    }, [sponsorshipPackageId, authToken]);

    const onSaveSponsorshipPackageSubmit = () => {
        const saveSponsorshipPackageBody = {
            id: sponsorshipPackageId,
            translations: sponsorshipPackageTranslationFields.translations,
            standSize: standSizeField.value,
            prices: priceFields.prices,
            isAvailable
        };

        saveSponsorshipPackageAction(sponsorshipPackageId, saveSponsorshipPackageBody, authToken, dispatch, snackbar);

    };

    const onDeleteSponsorshipPackageSubmit = () => {
        deleteSponsorshipPackageAction(sponsorshipPackageId, authToken, dispatch, snackbar, navigate);
    }

    const sponsorshipPackageTranslationFields = useSponsorshipPackageTranslationFields();
    const standSizeField = useFieldValidation('', validateStandSize);
    const priceFields = usePriceFields();
    const [isAvailable, setIsAvailable] = useState(false);


    useEffect(() => {
        const {
            translations = [],
            standSize = 0,
            prices = [],
            isAvailable: newIsAvailable = false
        } = sponsorshipPackageDetails || {};

        sponsorshipPackageTranslationFields.setNewTranslations(translations);
        standSizeField.setValue(standSize);
        priceFields.setNewPrices(prices);
        setIsAvailable(newIsAvailable);

    }, [sponsorshipPackageDetails])

    return (
        <SponsorshipPackageDetailsComponentView sponsorshipPackageDetails={sponsorshipPackageDetails}
                                                loading={loading}
                                                error={error}
                                                errorResponse={errorResponse}

                                                sponsorshipPackageTranslationFields={sponsorshipPackageTranslationFields}
                                                standSizeField={standSizeField}
                                                priceFields={priceFields}
                                                isAvailable={isAvailable}
                                                setIsAvailable={setIsAvailable}

                                                onSaveSponsorshipPackageSubmit={onSaveSponsorshipPackageSubmit}
                                                onDeleteSponsorshipPackageSubmit={onDeleteSponsorshipPackageSubmit}
        />
    );
};


export default SponsorshipPackageDetailsComponentContainer;
