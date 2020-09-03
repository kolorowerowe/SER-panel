import i18n from "../i18n";
import isEmail from "validator/es/lib/isEmail";

export const validateEmail = (email) => {
    if (!email) {
        return new Error(i18n.t('validation:fieldRequired'));
    } else if (!isEmail(email)) {
        return new Error(i18n.t('validation:emailInvalid'));

    }
    return null;
};

export const validateFullName = (fullName) => {
    if (!fullName) {
        return new Error(i18n.t('validation:fieldRequired'));
    }
    return null;
};

export const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
        return new Error(i18n.t('validation:fieldRequired'));
    }
    return null;
};


export const validatePassword = (password) => {
    if (!password) {
        return new Error(i18n.t('validation:fieldRequired'));
    } else if (password.length < 5) {
        return new Error(i18n.t('validation:passwordTooShort'));

    }
    return null;
};

export const validateVerificationCode = (verificationCode) => {
    if (!verificationCode) {
        return new Error(i18n.t('validation:fieldRequired'));
    } else if (verificationCode.length !== 6) {
        return new Error(i18n.t('validation:verificationCodeNeedToHave6Digits'));

    }
    return null;
};

export const validateCompanyName = (companyName) => {
    if (!companyName) {
        return new Error(i18n.t('validation:fieldRequired'));
    } else if (companyName.length < 3) {
        return new Error(i18n.t('validation:companyNameTooShort'));

    }
    return null;
};

export const validateTaxId = (taxId) => {
    if (!taxId) {
        return new Error(i18n.t('validation:fieldRequired'));
    }
    //TODO: validate format of tax id
    return null;
};

export const validateStreet = (street) => {
    if (!street) {
        return new Error(i18n.t('validation:fieldRequired'));
    }
    return null;
};

export const validateBuildingNumber = (buildingNumber) => {
    if (!buildingNumber) {
        return new Error(i18n.t('validation:fieldRequired'));
    }
    return null;
}

export const validateFlatNumber = (flatNumber) => {

    return null;
}

export const validateCity = (city) => {
    if (!city) {
        return new Error(i18n.t('validation:fieldRequired'));
    }
    return null;
}

export const validatePostalCode = (postalCode) => {
    if (!postalCode) {
        return new Error(i18n.t('validation:fieldRequired'));
    }
    return null;
}

export const validateSponsorshipPackageType = (sponsorshipPackageType) => {
    if (!sponsorshipPackageType) {
        return new Error(i18n.t('validation:fieldRequired'));
    }
    return null;
}

export const validatePriceValue = (price) => {
    if (!price) {
        return new Error(i18n.t('validation:priceRequired'));
    }
    return null;
}

export const validateStandSize = (standSize) => {
    if (!standSize) {
        return new Error(i18n.t('validation:fieldRequired'));
    }
    return null;
}



export const noValidate = () => null;