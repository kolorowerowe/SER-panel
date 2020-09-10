import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import sidebarEN from './locales/en/sidebar.json'
import sidebarPL from './locales/pl/sidebar.json'

import generalEN from './locales/en/general.json'
import generalPL from './locales/pl/general.json'

import errorsEN from './locales/en/errors.json'
import errorsPL from './locales/pl/errors.json'

import authEN from './locales/en/auth.json'
import authPL from './locales/pl/auth.json'

import userEN from './locales/en/user.json'
import userPL from './locales/pl/user.json'

import companyEN from './locales/en/company.json'
import companyPL from './locales/pl/company.json'

import validationEN from './locales/en/validation.json'
import validationPL from './locales/pl/validation.json'

import deadlineEN from './locales/en/deadline.json'
import deadlinePL from './locales/pl/deadline.json'

import sponsorshipPackageEN from './locales/en/sponsorshipPackage.json'
import sponsorshipPackagePL from './locales/pl/sponsorshipPackage.json'


const resources = {
    en: {
        sidebar: sidebarEN,
        general: generalEN,
        errors: errorsEN,
        auth: authEN,
        user: userEN,
        company: companyEN,
        validation: validationEN,
        deadline: deadlineEN,
        sponsorshipPackage: sponsorshipPackageEN
    },
    pl: {
        sidebar: sidebarPL,
        general: generalPL,
        errors: errorsPL,
        auth: authPL,
        user: userPL,
        company: companyPL,
        validation: validationPL,
        deadline: deadlinePL,
        sponsorshipPackage: sponsorshipPackagePL
    }
};

if (!localStorage.getItem("languageCode")){
    localStorage.setItem("languageCode", "en")
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem("languageCode"),
        fallbackLng: "en",
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;