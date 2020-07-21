import React, {useEffect, useState} from 'react';
import UsersComponentView from "./UsersComponentView";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "../../utils/useSnackbar";
import {fetchUsersAction} from "../../redux/actions/usersActions";

const UsersComponentContainer = () => {

    const {users, loading, error, errorResponse} = useSelector(state => state.users);

    const {authToken} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const snackbar = useSnackbar();

    const [addNewUserDialogOpen, setAddNewUserDialogOpen] = useState(false);

    useEffect(() => {
        fetchUsersAction(authToken, dispatch);
    }, []);

    return (
        <UsersComponentView users={users}
                            loading={loading}
                            error={error}
                            errorResponse={errorResponse}

                            addNewUserDialogOpen={addNewUserDialogOpen}
                            setAddNewUserDialogOpen={setAddNewUserDialogOpen}
        />
    );
};


export default UsersComponentContainer;
