import React, {useMemo} from 'react';
import PropTypes from "prop-types"
import CustomAlert from "./CustomAlert";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import {useSelector} from "react-redux";
import moment from "moment";

const ErrorAlert = props => {

    const {
        error,
        errorResponse: {
            data: {
                errorCode = 0
            } = {},
            status = 0
        } = {},
        displayGrid,
        ...other
    } = props;

    const {t} = useTranslation();
    const {
        auth: {
            expired
        } = {}
    } = useSelector(state => state.auth);

    const isToxenExpired = useMemo(() => (status === 403 && moment(expired * 1000).isBefore(moment())),
        [status, expired])

    const errorCodeDisplayed = isToxenExpired ? 100 : errorCode;

    return (
        displayGrid ?
            (error ? <Grid item xs={12}>
                <CustomAlert severity={'error'} message={t(`errors:${errorCodeDisplayed}`)} {...other}/>
            </Grid> : <></>)
            :
            (error ? <CustomAlert severity={'error'} message={t(`errors:${errorCodeDisplayed}`)} {...other}/> : <></>
            )
    );
};

ErrorAlert.propTypes = {
    error: PropTypes.object,
    errorResponse: PropTypes.object,
    displayGrid: PropTypes.bool
};

export default ErrorAlert;
