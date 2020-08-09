import i18n from "../i18n";
import isEmail from "validator/es/lib/isEmail";

export const validateEmail = (email) => {
    if (!email) {
        return new Error(i18n.t('validation:emailRequired'));
    } else if (!isEmail(email)) {
        return new Error(i18n.t('validation:emailInvalid'));

    }
    return null;
};

export const validateFullName = (fullName) => {
    if (!fullName) {
        return new Error(i18n.t('validation:fullNameRequired'));
    }
    return null;
};

export const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
        return new Error(i18n.t('validation:phoneNumberRequired'));
    }
    return null;
};


export const validatePassword = (password) => {
    if (!password) {
        return new Error(i18n.t('validation:passwordRequired'));
    } else if (password.length < 5) {
        return new Error(i18n.t('validation:passwordTooShort'));

    }
    return null;
};

export const validateVerificationCode = (verificationCode) => {
    if (!verificationCode) {
        return new Error(i18n.t('validation:verificationCodeRequired'));
    } else if (verificationCode.length !== 6) {
        return new Error(i18n.t('validation:verificationCodeNeedToHave6Digits'));

    }
    return null;
};

export const validateCompanyName = (companyName) => {
    if (!companyName) {
        return new Error(i18n.t('validation:companyNameRequired'));
    } else if (companyName.length < 3) {
        return new Error(i18n.t('validation:companyNameTooShort'));

    }
    return null;
};

export const validateTaxId = (taxId) => {
    if (!taxId) {
        return new Error(i18n.t('validation:taxIdRequired'));
    }
    //TODO: validate format of tax id
    return null;
};

export const validateStreet = (street) => {
    if (!street) {
        return new Error(i18n.t('validation:streetRequired'));
    }
    return null;
};

export const validateBuildingNumber = (buildingNumber) => {
    if (!buildingNumber) {
        return new Error(i18n.t('validation:buildingNumberRequired'));
    }
    return null;
}

export const validateFlatNumber = (flatNumber) => {

    return null;
}

export const validateCity = (city) => {
    if (!city) {
        return new Error(i18n.t('validation:cityRequired'));
    }
    return null;
}

export const validatePostalCode = (postalCode) => {
    if (!postalCode) {
        return new Error(i18n.t('validation:postalCodeRequired'));
    }
    return null;
}



export const noValidate = () => null;