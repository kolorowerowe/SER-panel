import i18n from "../i18n";
import isEmail from "validator/es/lib/isEmail";

export const validateEmail = (email) => {
    if (!email) {
        return new Error(i18n.t('auth:emailRequiredError'));
    } else if (!isEmail(email)) {
        return new Error(i18n.t('auth:emailInvalidError'));

    }
    return null;
};

export const validateFullName = (fullName) => {
    if (!fullName) {
        return new Error(i18n.t('user:fullNameRequiredError'));
    }
    return null;
};

export const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
        return new Error(i18n.t('user:phoneNumberRequiredError'));
    }
    return null;
};


export const validatePassword = (password) => {
    if (!password) {
        return new Error(i18n.t('auth:passwordRequiredError'));
    } else if (password.length < 5) {
        return new Error(i18n.t('auth:passwordTooShortError'));

    }
    return null;
};