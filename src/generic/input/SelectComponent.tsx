import React from 'react';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {SelectElement} from "../../declarations/types";

type Props = {
    value: string | number;
    onChange: (
        event: React.ChangeEvent<{ name?: string; value: unknown }>,
        child: React.ReactNode
    ) => void;
    possibleValues: SelectElement[];
    label?: string;
}

const SelectComponent: React.FC<Props> = (props: Props) => {

    const {
        value,
        onChange,
        possibleValues = [],
        label,
        ...others
    } = props;

    return (
        <FormControl fullWidth>
            {!!label && <InputLabel>{label}</InputLabel>}
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

export default SelectComponent;
