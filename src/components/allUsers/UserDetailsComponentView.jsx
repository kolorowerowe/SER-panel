import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import ValidatedTextField from "../../generic/ValidatedTextField";
import ErrorAlert from "../../generic/ErrorAlert";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SelectComponent from "../../generic/SelectComponent";
import {ALL_ROLES} from "../../utils/constans";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import ProgressBar from "../../generic/ProgressBar";
import Tooltip from "@material-ui/core/Tooltip";

const UserDetailsComponentView = (props) => {

    const {
        emailField,
        fullNameField,
        phoneNumberField,
        roleValue,
        setRoleValue,
        onSaveUserSubmit,
        onDeleteUserSubmit,
        canDeleteUser,
        user: {
            uuid,
            lastSeen,
            userCreatedDate,
            isActivated
        } = {},
        loading,
        error,
        errorResponse,
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();


    return (
        <DefaultCard title={t('user:userDetails')} backButton>
            <Grid container spacing={2}>

                <ErrorAlert error={error}
                            errorResponse={errorResponse}
                            className={classes.formElement} displayGrid/>

                <ProgressBar loading={loading} displayGrid/>


                <Grid item xs={12}>
                    <Typography className={classes.secondaryField}>
                        {t('user:userId')}: {uuid}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.secondaryField}>
                        {t('user:lastSeen')}: {isActivated ? (moment(lastSeen).format('LLL') + " " + moment(lastSeen).fromNow()) : t('user:notActivated')}
                    </Typography>
                    <Typography className={classes.secondaryField}>
                        {t('user:createdDate')}: {moment(userCreatedDate).format('LL')} ({moment(userCreatedDate).fromNow()})
                    </Typography>
                </Grid>

                <Grid item xs={12}/>

                <Grid item xs={12} className={classes.editDataGrid}>
                    <Grid container spacing={2} className={classes.editDataContainer}>
                        <Grid item xs={12}>
                            <ValidatedTextField
                                label={t('auth:email')}
                                name="email"
                                field={emailField}
                                className={classes.formElement}
                                variant={'standard'}
                                disabled
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <ValidatedTextField
                                label={t('user:fullName')}
                                name="fullName"
                                field={fullNameField}
                                className={classes.formElement}
                                disabled={loading}
                                variant={'standard'}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <ValidatedTextField
                                label={t('user:phoneNumber')}
                                name="phoneNumber"
                                field={phoneNumberField}
                                className={classes.formElement}
                                variant={'standard'}
                                disabled={loading}
                            />
                        </Grid>

                        <Grid item xs={12} className={classes.gridItem}>
                            <SelectComponent label={t('user:role')}
                                             value={roleValue}
                                             onChange={e => setRoleValue(e.target.value)}
                                             possibleValues={ALL_ROLES}
                                             disabled

                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Tooltip title={t('user:deleteUserTooltip')}>
                                <span>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        color={"secondary"}
                                        className={classes.formElement}
                                        onClick={onDeleteUserSubmit}
                                        disabled={loading || !canDeleteUser}
                                    >
                                        {t('user:deleteUser')}
                                    </Button>
                                </span>
                            </Tooltip>

                        </Grid>

                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.formElement}
                                onClick={onSaveUserSubmit}
                                disabled={loading}
                            >
                                {t('user:saveUser')}
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </DefaultCard>

    );
};


export default UserDetailsComponentView;

const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: 20,
        marginBottom: 20
    },
    formElement: {
        marginTop: 20
    },
    gridItem: {
        display: 'grid'
    },
    editDataGrid: {
        display: 'flex',
        justifyContent: 'center'
    },
    editDataContainer: {
        maxWidth: 600,
    },
    deleteButton: {
        marginTop: 20,
        color: theme.palette.error.main
    }
}));
