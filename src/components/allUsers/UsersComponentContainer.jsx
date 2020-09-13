import React, {useEffect, useState} from 'react';
import UsersComponentView from "./UsersComponentView";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "../../utils/useSnackbar";
import {addNewUserAction, fetchUsersAction} from "../../redux/actions/usersActions";

const UsersComponentContainer = () => {

    const {users, loading, error, errorResponse} = useSelector(state => state.users);

    const {authToken} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const snackbar = useSnackbar();

    const [addNewUserDialogOpen, setAddNewUserDialogOpen] = useState(false);

    const handleAddNewUserSubmit = (userBody) => {

        addNewUserAction(userBody, authToken, dispatch, snackbar);
        setAddNewUserDialogOpen(false);
    }

    useEffect(() => {
        fetchUsersAction(authToken, dispatch);
    }, [authToken]);

    return (
        <UsersComponentView users={users}
                            loading={loading}
                            error={error}
                            errorResponse={errorResponse}

                            addNewUserDialogOpen={addNewUserDialogOpen}
                            setAddNewUserDialogOpen={setAddNewUserDialogOpen}
                            handleAddNewUserSubmit={handleAddNewUserSubmit}
        />
    );
};


export default UsersComponentContainer;
