import {SelectElement} from "../declarations/types";
import i18n from "../i18n";


export const generateSelectValues = (from: number, to: number): SelectElement[] => {

    const generatedSelectValue: SelectElement[] = [];

    for (let i = from; i <= to; i++) {
        generatedSelectValue.push({
            name: i18n.t('general:pieces', {count: i}),
            value: i
        })
    }

    return generatedSelectValue;
}

export const round = (value: number, decimalPlaces = 2) => {
    return value.toFixed(decimalPlaces);
};

export const formatAsPercentage = (value: number) => {
    return round(value*100, 0) + '%';
}
