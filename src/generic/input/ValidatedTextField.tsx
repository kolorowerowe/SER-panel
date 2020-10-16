import React from 'react';
import TextField from "@material-ui/core/TextField";
import {ValidatedField} from "../../declarations/types";

type Props = {
    field: ValidatedField;
    label?: string;
    disabled?: boolean;
    type?: string;
}

const ValidatedTextField: React.FC<Props> = (props: Props) => {

    const {
        field: {
            value,
            error,
            handleBlur,
            handleChange
        },
        label,
        disabled,
        type
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
            label={label}
            type={type}
            disabled={disabled}
        />
    );
};

export default ValidatedTextField;
