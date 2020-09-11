import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "../../../utils/useSnackbar";
import {changeUserDetailsAction, deleteUserAction, fetchUserDetailsAction} from "../../../redux/actions/usersActions";
import UserDetailsComponentView from "./UserDetailsComponentView";
import {useNavigate, useParams} from "react-router";
import useFieldValidation from "../../../utils/useFieldValidation";
import {validateEmail, validateFullName, validatePhoneNumber} from "../../../utils/Validators";

const UserDetailsComponentContainer = () => {

    const {user, loading, error, errorResponse} = useSelector(state => state.users);
    const {authToken} = useSelector(state => state.auth);
    const {
        user: {
            id: loggedInUserId
        } = {}
    } = useSelector(state => state.activeUser);
    const {userId} = useParams()
    const dispatch = useDispatch();
    const snackbar = useSnackbar();
    const navigate = useNavigate();


    useEffect(() => {
        fetchUserDetailsAction(userId, authToken, dispatch);
    }, []);

    const onSaveUserSubmit = () => {
        const saveUserBody = {
            fullName: fullNameField.value,
            phoneNumber: phoneNumberField.value,
        }

        changeUserDetailsAction(user.id, saveUserBody, authToken, dispatch, snackbar);

    };

    const {id, role} = user || {};
    const canDeleteUser = (loggedInUserId !== id) && (role !== 'SYSTEM_ADMIN');

    const onDeleteUserSubmit = () => {
        deleteUserAction(user.id, authToken, dispatch, snackbar, navigate);
    }

    const emailField = useFieldValidation('', validateEmail);
    const fullNameField = useFieldValidation('', validateFullName);
    const phoneNumberField = useFieldValidation('', validatePhoneNumber);
    const [roleValue, setRoleValue] = useState('');

    useEffect(() => {
        if (!!user) {
            emailField.setValue(user.email);
            fullNameField.setValue(user.fullName);
            phoneNumberField.setValue(user.phoneNumber);
            setRoleValue(user.role)
        }
    }, [user])

    return (
        <UserDetailsComponentView user={user}
                                  loading={loading}
                                  error={error}
                                  errorResponse={errorResponse}

                                  emailField={emailField}
                                  fullNameField={fullNameField}
                                  phoneNumberField={phoneNumberField}
                                  roleValue={roleValue}
                                  setRoleValue={setRoleValue}

                                  onSaveUserSubmit={onSaveUserSubmit}
                                  onDeleteUserSubmit={onDeleteUserSubmit}
                                  canDeleteUser={canDeleteUser}
        />
    );
};


export default UserDetailsComponentContainer;
