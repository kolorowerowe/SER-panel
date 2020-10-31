import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "../../../../utils/useSnackbar";
import {useNavigate, useParams} from "react-router";
import useFieldValidation from "../../../../utils/useFieldValidation";
import {validatePositiveNumber} from "../../../../utils/Validators";
import {
    deleteSponsorshipPackageAction,
    fetchSponsorshipPackageDetailsAction,
    saveSponsorshipPackageAction
} from "../../../../redux/actions/sponsorshipPackagesActions";
import SponsorshipPackageDetailsComponent from "./SponsorshipPackageDetailsComponent";
import usePriceFields from "../../../../utils/usePriceFields";
import useTranslationFields from "../../../../utils/useTranslationFields";
import {useTranslation} from "react-i18next";
import SponsorshipPackageEquipmentComponent from "./SponsorshipPackageEquipmentComponent";
import SubRouteTabs from "../../../../generic/SubRouteTabs";
import {RootState} from "../../../../redux/store";

const SponsorshipPackageContainer: React.FC = () => {

    const {sponsorshipPackageDetails, loading, error, errorResponse} = useSelector((state: RootState) => state.sponsorshipPackages);
    const {authToken} = useSelector((state: RootState) => state.auth);
    const {t} = useTranslation();
    const {sponsorshipPackageId} = useParams()
    const dispatch = useDispatch();
    const snackbar = useSnackbar();
    const navigate = useNavigate();

    const sponsorshipPackageTranslationFields = useTranslationFields();
    const standSizeField = useFieldValidation('', validatePositiveNumber);
    const maxCompaniesField = useFieldValidation('', validatePositiveNumber);
    const priceFields = usePriceFields();
    const [isAvailable, setIsAvailable] = useState(false);

    useEffect(() => {
        dispatch(fetchSponsorshipPackageDetailsAction(sponsorshipPackageId));
    }, [sponsorshipPackageId]);

    const onSaveSponsorshipPackageSubmit = () => {
        const saveSponsorshipPackageBody = {
            id: sponsorshipPackageId,
            translations: sponsorshipPackageTranslationFields.translations,
            standSize: standSizeField.value,
            maxCompanies: maxCompaniesField.value,
            prices: priceFields.prices,
            isAvailable
        };

        dispatch(saveSponsorshipPackageAction(sponsorshipPackageId, saveSponsorshipPackageBody, snackbar));

    };

    const onDeleteSponsorshipPackageSubmit = () => {
        deleteSponsorshipPackageAction(sponsorshipPackageId, snackbar, navigate);
    }


    useEffect(() => {
        const {
            translations = [],
            standSize = 0,
            maxCompanies = 0,
            prices = [],
            isAvailable: newIsAvailable = false
        } = sponsorshipPackageDetails || {};

        sponsorshipPackageTranslationFields.setNewTranslations(translations);
        standSizeField.setValue(standSize);
        maxCompaniesField.setValue(maxCompanies);
        priceFields.setNewPrices(prices);
        setIsAvailable(newIsAvailable);

    }, [sponsorshipPackageDetails]);

    const sponsorshipPackageSubRoutes = [
        {
            label: t('sponsorshipPackage:sponsorshipPackageDetails'),
            href: "/",
            index: 0,
            component: <SponsorshipPackageDetailsComponent sponsorshipPackageDetails={sponsorshipPackageDetails}
                                                           loading={loading}
                                                           sponsorshipPackageTranslationFields={sponsorshipPackageTranslationFields}
                                                           standSizeField={standSizeField}
                                                           maxCompaniesField={maxCompaniesField}
                                                           priceFields={priceFields}
                                                           isAvailable={isAvailable}
                                                           setIsAvailable={setIsAvailable}

                                                           onSaveSponsorshipPackageSubmit={onSaveSponsorshipPackageSubmit}
                                                           onDeleteSponsorshipPackageSubmit={onDeleteSponsorshipPackageSubmit}
            />
        },
        {
            label: t('sponsorshipPackage:equipment'),
            href: "equipment",
            index: 1,
            component: <SponsorshipPackageEquipmentComponent loading={loading}
                                                             sponsorshipPackageDetails={sponsorshipPackageDetails}/>
        }
    ];


    return (
        <SubRouteTabs subRoutes={sponsorshipPackageSubRoutes}
                      baseUrl={`/sponsorship-package/${sponsorshipPackageId}`}
                      loading={loading}
                      error={error}
                      errorResponse={errorResponse}/>
    );
};


export default SponsorshipPackageContainer;
