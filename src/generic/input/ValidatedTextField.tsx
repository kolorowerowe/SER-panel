import React from 'react';
import TextField from "@material-ui/core/TextField";
import {ValidatedField} from "../../declarations/types";

type Props = {
    field: ValidatedField;
    label?: string;
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
        />
    );
};

export default ValidatedTextField;
