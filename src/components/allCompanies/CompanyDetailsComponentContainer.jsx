import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "../../utils/useSnackbar";
import CompanyDetailsComponentView from "./CompanyDetailsComponentView";
import {useHistory, useParams} from "react-router";
import useFieldValidation from "../../utils/useFieldValidation";
import {noValidate} from "../../utils/Validators";
import {changeCompanyDetailsAction, fetchCompanyDetailsAction} from "../../redux/actions/companiesActions";

const CompanyDetailsComponentContainer = () => {

    const {company, loading, error, errorResponse} = useSelector(state => state.companies);
    const {authToken} = useSelector(state => state.auth);
    const {companyId} = useParams()
    const dispatch = useDispatch();
    const snackbar = useSnackbar();
    const history = useHistory();


    useEffect(() => {
        fetchCompanyDetailsAction(companyId, authToken, dispatch);
    }, []);

    const onSaveCompanySubmit = () => {
        const saveCompanyDetailsBody = {
            contactPhone: contactPhoneField.value,
            taxId: taxIdField.value,
        }

        changeCompanyDetailsAction(company.id, saveCompanyDetailsBody, authToken, dispatch, snackbar);

    };

    const nameField = useFieldValidation('', noValidate);
    const contactPhoneField = useFieldValidation('', noValidate);
    const taxIdField = useFieldValidation('', noValidate);

    useEffect(() => {
        if (!!company) {
            nameField.setValue(company.name);
            contactPhoneField.setValue(company.contactPhone);
            taxIdField.setValue(company.taxId);
        }
    }, [company])

    return (
        <CompanyDetailsComponentView company={company}
                                     loading={loading}
                                     error={error}
                                     errorResponse={errorResponse}

                                     nameField={nameField}
                                     contactPhoneField={contactPhoneField}
                                     taxIdField={taxIdField}

                                     onSaveCompanySubmit={onSaveCompanySubmit}
        />
    );
};


export default CompanyDetailsComponentContainer;
