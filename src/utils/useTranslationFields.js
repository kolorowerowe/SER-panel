import {useState} from "react";
import {POSSIBLE_TRANSLATIONS} from "./constans";

const useTranslationFields = () => {

    const initialTranslations = POSSIBLE_TRANSLATIONS.map(translation => ({
        languageCode: translation.value,
        name: '',
        description: ''
    }));

    const [translations, setTranslations] = useState(initialTranslations);

    const setName = (value, languageCode) => {
        setTranslations(translations.map(
            translation => translation.languageCode === languageCode ? {...translation, name: value} : translation
        ))
    };

    const setDescription = (value, languageCode) => {
        setTranslations(translations.map(
            translation => translation.languageCode === languageCode ? {...translation, description: value} : translation
        ))
    };

    const setNewTranslations = (newTranslations) => {
        let tempTranslations = initialTranslations;
        newTranslations.forEach(newTranslation => {
            tempTranslations = tempTranslations.map(
                tempPrice => tempPrice.languageCode === newTranslation.languageCode ? {
                    languageCode: newTranslation.languageCode,
                    name: newTranslation.name,
                    description: newTranslation.description
                } : tempPrice
            );
        });
        setTranslations(tempTranslations);
    };

    return {
        translations,
        setNewTranslations,
        setName,
        setDescription
    };
};

export default useTranslationFields;