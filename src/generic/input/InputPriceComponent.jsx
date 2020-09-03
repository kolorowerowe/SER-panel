import React from 'react';
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import getSymbolFromCurrency from 'currency-symbol-map'


const InputPriceComponent = props => {

    const {t} = useTranslation();
    const classes = useStyles();

    const {
        priceFields: {
            prices = [],
            setPriceValue
        }
    } = props;

    return (
        <Grid container spacing={2}>
            {prices.map(price => (
                <Grid item xs={6}>
                    <TextField
                        value={price.value}
                        label={t('general:priceInCurrency').replace("${currency}", price.currency)}
                        type="number"
                        onChange={e => setPriceValue(e.target.value, price.currency)}
                        variant={'standard'}
                        fullWidth
                        className={classes.priceValue}
                        {...props}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">{getSymbolFromCurrency(price.currency)}</InputAdornment>,
                        }}
                    />
                </Grid>

            ))}
        </Grid>

    );
};

const useStyles = makeStyles((theme) => ({
    priceValue: {
        minWidth: 200,
    },
    currency: {
        width: '100%'
    }
}));

InputPriceComponent.propTypes = {
    priceFields: PropTypes.object.isRequired
};

export default InputPriceComponent;
