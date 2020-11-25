import {useEffect, useState} from "react";
import {ValidatedField} from "../declarations/types";

const useFieldValidation = (initialValue: string| number,
                            validate: (value: string | number) => Error | null): ValidatedField => {
    const [value, setValue] = useState<string | number>(initialValue);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (value !== initialValue) {
            const validationError = validate(value);
            setError(validationError);
        }
    }, [value, validate, initialValue]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleBlur = () => {
        const validationError = validate(value);
        setError(validationError);
    };

    const runValidation = () => {
        const validationError = validate(value);
        setError(validationError);
        return validationError;
    };

    return {
        value,
        handleChange,
        error,
        handleBlur,
        validate: runValidation,
        setValue
    };
};

export default useFieldValidation;