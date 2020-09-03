import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "../../../utils/useSnackbar";
import CompanyDetailsComponentView from "./CompanyDetailsComponentView";
import {useHistory, useParams} from "react-router";
import useFieldValidation from "../../../utils/useFieldValidation";
import {
    validateBuildingNumber,
    validateCity,
    validateCompanyName,
    validateFlatNumber,
    validatePhoneNumber,
    validatePostalCode,
    validateStreet,
    validateTaxId
} from "../../../utils/Validators";
import {changeCompanyDetailsAction, fetchCompanyDetailsAction} from "../../../redux/actions/companiesActions";

const CompanyDetailsComponentContainer = () => {

    const {company, loading, error, errorResponse} = useSelector(state => state.companies);
    const {authToken} = useSelector(state => state.auth);
    const {companyId} = useParams()
    const dispatch = useDispatch();
    const snackbar = useSnackbar();
    const history = useHistory();


    useEffect(() => {
        fetchCompanyDetailsAction(companyId, authToken, dispatch);
    }, [companyId]);

    const onSaveCompanySubmit = () => {

        const allFields = [contactPhoneField, taxIdField, streetField, buildingNumberField, flatNumberField, cityField, postalCodeField];
        const isError = allFields.reduce((currentError, x) => (currentError || !!x.validate()), false);


        if (!isError){
            const saveCompanyDetailsBody = {
                contactPhone: contactPhoneField.value,
                taxId: taxIdField.value,
                address: {
                    street: streetField.value,
                    buildingNumber: buildingNumberField.value,
                    flatNumber: flatNumberField.value,
                    city: cityField.value,
                    postalCode: postalCodeField.value
                }
            }

            changeCompanyDetailsAction(company.id, saveCompanyDetailsBody, authToken, dispatch, snackbar);
        }


    };

    const companyNameField = useFieldValidation('', validateCompanyName);
    const contactPhoneField = useFieldValidation('', validatePhoneNumber);
    const taxIdField = useFieldValidation('', validateTaxId);

    const streetField = useFieldValidation('', validateStreet);
    const buildingNumberField = useFieldValidation('', validateBuildingNumber);
    const flatNumberField = useFieldValidation('', validateFlatNumber);
    const cityField = useFieldValidation('', validateCity);
    const postalCodeField = useFieldValidation('', validatePostalCode);


    useEffect(() => {
        const {
            name,
            contactPhone,
            taxId,
            address: {
                street,
                buildingNumber,
                flatNumber,
                city,
                postalCode
            } = {}
        } = company || {}

        companyNameField.setValue(name);
        contactPhoneField.setValue(contactPhone);
        taxIdField.setValue(taxId);

        streetField.setValue(street);
        buildingNumberField.setValue(buildingNumber);
        flatNumberField.setValue(flatNumber);
        cityField.setValue(city);
        postalCodeField.setValue(postalCode);

    }, [company])

    return (
        <CompanyDetailsComponentView company={company}
                                     loading={loading}
                                     error={error}
                                     errorResponse={errorResponse}

                                     companyNameField={companyNameField}
                                     contactPhoneField={contactPhoneField}
                                     taxIdField={taxIdField}

                                     streetField={streetField}
                                     buildingNumberField={buildingNumberField}
                                     flatNumberField={flatNumberField}
                                     cityField={cityField}
                                     postalCodeField={postalCodeField}

                                     onSaveCompanySubmit={onSaveCompanySubmit}

        />
    );
};


export default CompanyDetailsComponentContainer;
