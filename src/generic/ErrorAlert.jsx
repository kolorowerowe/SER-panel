import React from 'react';
import PropTypes from "prop-types"
import CustomAlert from "./CustomAlert";
import {useTranslation} from "react-i18next";

const ErrorAlert = props => {

    const {
        error,
        errorResponse: {
            data: {
                errorCode = 0
            } = {}
        } = {},
        ...other
    } = props;

    const {t} = useTranslation();

    console.log(errorCode)

    return (
        error ? <CustomAlert severity={'error'} message={t(`errors:${errorCode}`)} {...other}/> : <div/>
    );
};

ErrorAlert.propTypes = {
    error: PropTypes.object
};

export default ErrorAlert;
