import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UsersTable from "./UsersTable";
import Divider from "@material-ui/core/Divider";
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
    const classes = useStyles();

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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AddNewUserDialog {...props}/>
                <DefaultCard title={t('user:allUsers')} buttonComponent={<NewUserButton/>}>
                    <Divider className={classes.divider}/>
                    <UsersTable users={users}/>
                </DefaultCard>
            </Grid>
        </Grid>

    );
};


export default UsersComponentView;

const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: 20,
        marginBottom: 20
    }
}));
