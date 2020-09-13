import React from 'react';
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types"

const ValidatedTextField = props => {

    const {
        field: {
            value,
            error,
            handleBlur,
            handleChange
        },
    } = props;

    return (
        <TextField
            value={value}
            onChange={handleChange}
            error={!!error}
            onBlur={handleBlur}
            helperText={(error && error.message) || ''}
            variant={'standard'}
            fullWidth
            {...props}
        />
    );
};

ValidatedTextField.propTypes = {
    field: PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        error: PropTypes.object,
        handleChange: PropTypes.func.isRequired,
        handleBlur: PropTypes.func.isRequired,
    }).isRequired,
    label: PropTypes.string.isRequired,
};

export default ValidatedTextField;
