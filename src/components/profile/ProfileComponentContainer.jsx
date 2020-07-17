import React from 'react';
import ProfileComponentView from "./ProfileComponentView";
import {useDispatch, useSelector} from "react-redux";
import useFieldValidation from "../../utils/useFieldValidation";
import {validatePassword} from "../../utils/Validators";
import {changeUserPasswordAction} from "../../redux/actions/activeUserActions";
import {useSnackbar} from "../../utils/useSnackbar";

const ProfileComponentContainer = () => {

    const {user, loading, error, errorResponse, errorPassword, errorPasswordResponse} = useSelector(state => state.activeUser);
    const {authToken} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const snackbar = useSnackbar();

    const oldPasswordField = useFieldValidation('', validatePassword);
    const newPasswordField = useFieldValidation('', validatePassword);
    const repeatNewPasswordField = useFieldValidation('', validatePassword);

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

                              oldPasswordField={oldPasswordField}
                              newPasswordField={newPasswordField}
                              repeatNewPasswordField={repeatNewPasswordField}
                              onChangePasswordSubmit={onChangePasswordSubmit}

        />
    );
};


export default ProfileComponentContainer;
