import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import {useTranslation} from "react-i18next";
import UsersTable from "./UsersTable";
import Button from "@material-ui/core/Button";
import AddNewUserDialog from "./AddNewUserDialog";

const UsersComponentView = (props) => {

    const {
        users,
        loading,
        error,
        errorResponse,

        setAddNewUserDialogOpen
    } = props;

    const {t} = useTranslation();

    const NewUserButton = () => (
        <Button
            variant="outlined"
            color="primary"
            onClick={() => {
                setAddNewUserDialogOpen(true)
            }}
        >
            {t('user:addNewUser')}
        </Button>
    );

    return (
        <DefaultCard title={t('user:allUsers')}
                     buttonComponent={<NewUserButton/>}
                     divider
                     loading={loading}
                     error={error}
                     errorResponse={errorResponse}
        >
            <AddNewUserDialog {...props}/>
            <UsersTable users={users}/>
        </DefaultCard>
    );
};


export default UsersComponentView;
