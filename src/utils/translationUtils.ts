import {Translation} from "../declarations/types";

export const getRightTranslation = (translations: Translation[], languageCode: string): Translation => {
    const rightTranslation = translations.find(t => t.languageCode === languageCode);
    if (rightTranslation) {
        return rightTranslation
    }
    const fallbackTranslation = translations.find(t => t.languageCode === 'en');
    if (fallbackTranslation) {
        return fallbackTranslation
    }
    return {
        languageCode: '-',
        name: '-',
        description: '-'
    } as Translation;
}