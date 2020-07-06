import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import sidebarEN from './locales/en/sidebar.json'
import sidebarPL from './locales/pl/sidebar.json'

import generalEN from './locales/en/general.json'
import generalPL from './locales/pl/general.json'

const resources = {
    en: {
        sidebar: sidebarEN,
        general: generalEN
    },
    pl: {
        sidebar: sidebarPL,
        general: generalPL
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