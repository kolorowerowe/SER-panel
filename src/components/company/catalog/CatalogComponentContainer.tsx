import React, {useEffect, useState} from 'react';
import CatalogComponentView from "./CatalogComponentView";
import {CompanyResponse} from "../../../declarations/types";
import useFieldValidation from "../../../utils/useFieldValidation";
import {noValidate, validateCompanyName, validateEmail} from "../../../utils/Validators";
import {changeCompanyDetailsAction} from "../../../redux/actions/companiesActions";
import {useDispatch} from "react-redux";
import {useSnackbar} from "../../../utils/useSnackbar";


type Props = {
    companyId: string;
    company?: CompanyResponse;
    loading: boolean;
}

const CatalogComponentContainer: React.FC<Props> = ({company, companyId, loading}: Props) => {

    const dispatch = useDispatch();
    const snackbar = useSnackbar();


    const companyNameField = useFieldValidation('', validateCompanyName);
    const descriptionField = useFieldValidation('', noValidate);
    const emailField = useFieldValidation('', validateEmail);
    const websiteField = useFieldValidation('', noValidate);
    const businessProfileField = useFieldValidation('', noValidate);

    const numberOfEmployeesPolandField = useFieldValidation(0, noValidate);
    const numberOfEmployeesWorldwideField = useFieldValidation(0, noValidate);
    const candidateRequirementsField = useFieldValidation('', noValidate);
    const mainOfficeLocationField = useFieldValidation('', noValidate);
    const subsidiaryOfficesLocationsField = useFieldValidation('', noValidate);
    const numberOfJobVacanciesField = useFieldValidation(0, noValidate);
    const [paidInternships, setPaidInternships] = useState<boolean>(false);
    const [unpaidInternships, setUnpaidInternships] = useState<boolean>(false);

    const recruitmentContactNameField = useFieldValidation('', noValidate);
    const recruitmentContactEmailField = useFieldValidation('', noValidate);
    const recruitmentContactPhoneField = useFieldValidation('', noValidate);

    useEffect(() => {
        if (company && company.catalogInformation) {
            const {
                catalogInformation: {
                    companyName = '',
                    description = '',
                    email = '',
                    website = '',
                    businessProfile = '',
                    numberOfEmployeesPoland = 0,
                    numberOfEmployeesWorldwide = 0,
                    candidateRequirements = '',
                    mainOfficeLocation = '',
                    subsidiaryOfficesLocations = '',
                    numberOfJobVacancies = 0,
                    paidInternships: paidInternshipsResponse = false,
                    unpaidInternships: unpaidInternshipsResponse = false,
                    recruitmentContactName = '',
                    recruitmentContactEmail = '',
                    recruitmentContactPhone = ''
                } = {}
            } = company || {};

            companyNameField.setValue(companyName);
            descriptionField.setValue(description);
            emailField.setValue(email);
            websiteField.setValue(website);
            businessProfileField.setValue(businessProfile);

            numberOfEmployeesPolandField.setValue(numberOfEmployeesPoland);
            numberOfEmployeesWorldwideField.setValue(numberOfEmployeesWorldwide);

            candidateRequirementsField.setValue(candidateRequirements);
            mainOfficeLocationField.setValue(mainOfficeLocation);
            subsidiaryOfficesLocationsField.setValue(subsidiaryOfficesLocations);
            numberOfJobVacanciesField.setValue(numberOfJobVacancies);

            setPaidInternships(paidInternshipsResponse);
            setUnpaidInternships(unpaidInternshipsResponse);

            recruitmentContactNameField.setValue(recruitmentContactName);
            recruitmentContactEmailField.setValue(recruitmentContactEmail);
            recruitmentContactPhoneField.setValue(recruitmentContactPhone);
        }

    }, [company]);

    const onSaveCatalogSubmit = () => {
        const catalogInformationRequest = {
            companyName: companyNameField.value,
            description: descriptionField.value,
            email: emailField.value,
            website: websiteField.value,
            businessProfile: businessProfileField.value,
            numberOfEmployeesPoland: numberOfEmployeesPolandField.value,
            numberOfEmployeesWorldwide: numberOfEmployeesWorldwideField.value,
            candidateRequirements: candidateRequirementsField.value,
            mainOfficeLocation: mainOfficeLocationField.value,
            subsidiaryOfficesLocations: subsidiaryOfficesLocationsField.value,
            numberOfJobVacancies: numberOfJobVacanciesField.value,
            paidInternships: paidInternships,
            unpaidInternships: unpaidInternships,
            recruitmentContactName: recruitmentContactNameField.value,
            recruitmentContactEmail: recruitmentContactEmailField.value,
            recruitmentContactPhone: recruitmentContactPhoneField.value
        };

        const request = {
            catalogInformationRequest: catalogInformationRequest
        };

        //TODO: validation

        dispatch(changeCompanyDetailsAction(companyId, request, snackbar));


    };

    return (
        <CatalogComponentView onSaveCatalogSubmit={onSaveCatalogSubmit}
                              loading={loading}

                              companyNameField={companyNameField}
                              descriptionField={descriptionField}
                              emailField={emailField}
                              websiteField={websiteField}
                              businessProfileField={businessProfileField}

                              numberOfEmployeesPolandField={numberOfEmployeesPolandField}
                              numberOfEmployeesWorldwideField={numberOfEmployeesWorldwideField}
                              candidateRequirementsField={candidateRequirementsField}
                              mainOfficeLocationField={mainOfficeLocationField}
                              subsidiaryOfficesLocationsField={subsidiaryOfficesLocationsField}
                              numberOfJobVacanciesField={numberOfJobVacanciesField}

                              paidInternships={paidInternships}
                              setPaidInternships={setPaidInternships}

                              unpaidInternships={unpaidInternships}
                              setUnpaidInternships={setUnpaidInternships}

                              recruitmentContactNameField={recruitmentContactNameField}
                              recruitmentContactEmailField={recruitmentContactEmailField}
                              recruitmentContactPhoneField={recruitmentContactPhoneField}
        />
    );
};


export default CatalogComponentContainer;