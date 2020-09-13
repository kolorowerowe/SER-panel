import getSymbolFromCurrency from "currency-symbol-map";
import {Price, Translation} from "../declarations/types";


export const joinTranslations = (translations: Translation[]): string => {
    return translations.map(translation => translation.name).join(" / ")
}

export const joinPrices = (prices: Price[]): string => {
    return prices.map(price => (price.value + getSymbolFromCurrency(price.currency))).join(" / ");
}