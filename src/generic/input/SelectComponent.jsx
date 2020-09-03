import React from 'react';
import PropTypes from "prop-types"
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const SelectComponent = props => {

    const {
        value,
        onChange,
        possibleValues = [],
        label,
        ...others
    } = props;

    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                onChange={onChange}
                {...others}
            >
                {possibleValues.map(({name, value}) => (
                    <MenuItem key={value} value={value}>{name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

SelectComponent.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    possibleValues: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired,
    label: PropTypes.string.isRequired
};

export default SelectComponent;
