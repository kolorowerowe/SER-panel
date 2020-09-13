import {useState} from "react";
import {POSSIBLE_CURRENCIES} from "./constans";

const usePriceFields = () => {

    const initialPrices = POSSIBLE_CURRENCIES.map(cur => ({
        currency: cur.value,
        value: 0
    }));

    const [prices, setPrices] = useState(initialPrices);

    const setPriceValue = (value, currency) => {
        setPrices(prices.map(
            price => price.currency === currency ? {currency, value} : price
        ))
    };

    const setNewPrices = (newPriceList) => {
        let tempPrices = initialPrices;
        newPriceList.forEach(newPrice => {
            tempPrices = tempPrices.map(
                tempPrice => tempPrice.currency === newPrice.currency ? {
                    currency: newPrice.currency,
                    value: newPrice.value
                } : tempPrice
            );
        });
        setPrices(tempPrices);
    };


    return {
        prices,
        setPriceValue,
        setNewPrices
        // resetPrices
    };
};

export default usePriceFields;