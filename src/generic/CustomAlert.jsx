import React from 'react';
import PropTypes from "prop-types"
import Alert from '@material-ui/lab/Alert'

const CustomAlert = props => {

    const {
        severity = 'info',
        message,
        onClose,
        variant = 'filled',
        ...other
    } = props;

    return (
        <Alert variant={variant} severity={severity} onClose={onClose} {...other}>
            {message}
        </Alert>
    );
};

CustomAlert.propTypes = {
    severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
    message: PropTypes.string,
    variant: PropTypes.string,
    onClose: PropTypes.func,
};

export default CustomAlert;
