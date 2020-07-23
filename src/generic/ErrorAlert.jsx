import React from 'react';
import PropTypes from "prop-types"
import CustomAlert from "./CustomAlert";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";

const ErrorAlert = props => {

    const {
        error,
        errorResponse: {
            data: {
                errorCode = 0
            } = {}
        } = {},
        displayGrid,
        ...other
    } = props;

    const {t} = useTranslation();

    return (
        displayGrid ?
            error && <Grid item xs={12}>
                <CustomAlert severity={'error'} message={t(`errors:${errorCode}`)} {...other}/>
            </Grid>
            :
            error && <CustomAlert severity={'error'} message={t(`errors:${errorCode}`)} {...other}/>

    );
};

ErrorAlert.propTypes = {
    error: PropTypes.object,
    errorResponse: PropTypes.object,
    displayGrid: PropTypes.bool
};

export default ErrorAlert;
