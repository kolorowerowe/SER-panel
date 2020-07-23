import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import {useTranslation} from "react-i18next";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import ValidatedTextField from "../../generic/ValidatedTextField";
import ErrorAlert from "../../generic/ErrorAlert";
import Button from "@material-ui/core/Button";
import ProgressBar from "../../generic/ProgressBar";

const ProfileComponentView = (props) => {

    const {
        loading,
        error,
        errorResponse,
        errorPassword,
        errorPasswordResponse,

        user: {
            uuid,
            role,
            userCreatedDate
        },
        emailField,
        fullNameField,
        phoneNumberField,
        onSavePersonalInfoSubmit,

        oldPasswordField,
        newPasswordField,
        repeatNewPasswordField,
        onChangePasswordSubmit
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();

    return (
        <Grid container spacing={2}>

            <Grid item xs={12}>
                <DefaultCard title={t('user:personalInfo')}>
                    <div className={classes.formContainer}>
                        <form className={classes.form} noValidate>

                            <ValidatedTextField
                                label={t('auth:email')}
                                name="email"
                                field={emailField}
                                className={classes.formElement}
                                disabled
                            />

                            <ValidatedTextField
                                label={t('user:fullName')}
                                name="fullName"
                                field={fullNameField}
                                className={classes.formElement}
                                disabled={loading}
                            />

                            <ValidatedTextField
                                label={t('user:phoneNumber')}
                                name="phoneNumber"
                                field={phoneNumberField}
                                className={classes.formElement}
                                disabled={loading}
                            />

                            <ErrorAlert error={error}
                                        errorResponse={errorResponse}
                                        className={classes.formElement} displayGrid/>

                            <ProgressBar loading={loading} className={classes.formElement}/>


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={onSavePersonalInfoSubmit}
                                disabled={loading}
                            >
                                {t('user:savePersonalInfo')}
                            </Button>
                        </form>
                    </div>
                </DefaultCard>
            </Grid>

            <Grid item xs={12}>
                <DefaultCard title={t('user:changePassword')}>
                    <div className={classes.formContainer}>
                        <form className={classes.form} noValidate>

                            <ValidatedTextField
                                label={t('auth:oldPassword')}
                                name="password"
                                type="password"
                                field={oldPasswordField}
                                className={classes.formElement}
                            />

                            <ValidatedTextField
                                label={t('auth:newPassword')}
                                name="password"
                                type="password"
                                field={newPasswordField}
                                className={classes.formElement}
                            />

                            <ValidatedTextField
                                label={t('auth:repeatNewPassword')}
                                name="password"
                                type="password"
                                field={repeatNewPasswordField}
                                className={classes.formElement}
                            />

                            <ErrorAlert error={error}
                                        errorResponse={errorResponse}
                                        className={classes.formElement}/>

                            <ProgressBar loading={loading} className={classes.formElement}/>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={onChangePasswordSubmit}
                                disabled={loading}
                            >
                                {t('user:changePassword')}
                            </Button>
                        </form>
                    </div>

                </DefaultCard>
            </Grid>

            <Grid item xs={12}>
                <DefaultCard title={t('user:details')}>
                    <Typography className={classes.secondaryField}>
                        {t('user:userId')}: {uuid}
                    </Typography>
                    <Typography className={classes.secondaryField}>
                        {t('user:role')}: {t(`user:${role}`)}
                    </Typography>
                    <Typography className={classes.secondaryField}>
                        {t('user:createdDate')}: {moment(userCreatedDate).format('LL')}
                    </Typography>
                </DefaultCard>
            </Grid>
        </Grid>

    );
};


export default ProfileComponentView;

const useStyles = makeStyles((theme) => ({
    secondaryField: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    form: {
        maxWidth: 600,
        marginTop: theme.spacing(1),
    },
    formElement: {
        marginTop: 20
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
