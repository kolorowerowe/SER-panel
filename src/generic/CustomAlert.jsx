import React from 'react';
import PropTypes from "prop-types"
import Alert from '@material-ui/lab/Alert'

const CustomAlert = props => {

    const {
        severity = 'info',
        message,
        ...other
    } = props;

    return (
        <Alert variant="filled" severity={severity} {...other}>
            {message}
        </Alert>
    );
};

CustomAlert.propTypes = {
    severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
    message: PropTypes.string.isRequired
};

export default CustomAlert;
