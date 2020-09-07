import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";


const CheckboxInput = (props) => {
    const {
        checked,
        onChange,
        label,
        disabled,
        ...other
    } = props;

    const styles = useStyles();

    return (
        <div className={styles.root}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={onChange}
                        color="primary"
                        disabled={disabled}
                        {...other}
                    />
                }
                label={label}
            />
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    }
}));

CheckboxInput.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool
};


export default CheckboxInput;
