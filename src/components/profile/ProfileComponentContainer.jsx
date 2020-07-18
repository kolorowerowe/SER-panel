import React, {useEffect} from 'react';
import ProfileComponentView from "./ProfileComponentView";
import {useDispatch, useSelector} from "react-redux";
import useFieldValidation from "../../utils/useFieldValidation";
import {validateEmail, validateFullName, validatePassword, validatePhoneNumber} from "../../utils/Validators";
import {changePersonalInfoAction, changeUserPasswordAction} from "../../redux/actions/activeUserActions";
import {useSnackbar} from "../../utils/useSnackbar";

const ProfileComponentContainer = () => {

    const {user, loading, error, errorResponse, errorPassword, errorPasswordResponse} = useSelector(state => state.activeUser);
    const {
        email,
        fullName,
        phoneNumber
    } = user || {};

    const {authToken} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const snackbar = useSnackbar();

    const emailField = useFieldValidation('', validateEmail);
    const fullNameField = useFieldValidation('', validateFullName);
    const phoneNumberField = useFieldValidation('', validatePhoneNumber);

    const oldPasswordField = useFieldValidation('', validatePassword);
    const newPasswordField = useFieldValidation('', validatePassword);
    const repeatNewPasswordField = useFieldValidation('', validatePassword);

    useEffect(() => {
        if (!!email) {
            emailField.setValue(email)
        }
        if (!!fullName) {
            fullNameField.setValue(fullName)
        }
        if (!!phoneNumber) {
            phoneNumberField.setValue(phoneNumber)
        }
    }, [email, fullName, phoneNumber])

    const onSavePersonalInfoSubmit = (event) => {
        event.preventDefault();

        const savePersonalInfoBody = {
            fullName: fullNameField.value,
            phoneNumber: phoneNumberField.value,
        }

        changePersonalInfoAction(user.uuid, savePersonalInfoBody, authToken, dispatch, snackbar);
    }

    const onChangePasswordSubmit = (event) => {
        event.preventDefault();

        const changePasswordBody = {
            oldPassword: oldPasswordField.value,
            newPassword: newPasswordField.value,
            repeatNewPassword: repeatNewPasswordField.value
        }

        changeUserPasswordAction(user.uuid, changePasswordBody, authToken, dispatch, snackbar);
    }

    return (
        <ProfileComponentView user={user}
                              loading={loading}

                              error={error}
                              errorResponse={errorResponse}

                              errorPassword={errorPassword}
                              errorPasswordResponse={errorPasswordResponse}

                              emailField={emailField}
                              fullNameField={fullNameField}
                              phoneNumberField={phoneNumberField}
                              onSavePersonalInfoSubmit={onSavePersonalInfoSubmit}

                              oldPasswordField={oldPasswordField}
                              newPasswordField={newPasswordField}
                              repeatNewPasswordField={repeatNewPasswordField}
                              onChangePasswordSubmit={onChangePasswordSubmit}

        />
    );
};


export default ProfileComponentContainer;
