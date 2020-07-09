import React, {useEffect, useState} from "react";

const useFieldValidation = (initialValue, validate) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (value !== initialValue) {
            const validationError = validate(value);
            setError(validationError);
        }
    }, [value, validate, initialValue]);

    const handleChange = (event) => {
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

    const resetToInitialValue = () => {
        setValue(initialValue);
    };

    const clearValue = () => {
        setValue('');
    };

    return {
        value,
        handleChange,
        error,
        handleBlur,
        resetToInitialValue,
        clearValue,
        validate: runValidation,
        setValue
    };
};

export default useFieldValidation;