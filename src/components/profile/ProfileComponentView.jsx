import React from 'react';
import DefaultCard from "../../generic/displayData/DefaultCard";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ValidatedTextField from "../../generic/input/ValidatedTextField";
import Button from "@material-ui/core/Button";
import LabeledData from "../../generic/displayData/LabeledData";
import {formatDateWithBackwardPeriod} from "../../utils/DateTimeUtils";

const ProfileComponentView = (props) => {

    const {
        loading,
        error,
        errorResponse,
        errorPassword,
        errorPasswordResponse,

        user: {
            id,
            role,
            userCreatedDate
        } = {},
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
                <DefaultCard title={t('user:personalInfo')}
                             divider
                             loading={loading}
                             error={error}
                             errorResponse={errorResponse}>
                    <div className={classes.formContainer}>
                        <form className={classes.form} noValidate>

                            <ValidatedTextField
                                label={t('auth:email')}
                                name="email"
                                field={emailField}
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
                <DefaultCard title={t('user:changePassword')}
                             divider
                             loading={loading}
                             error={errorPassword}
                             errorResponse={errorPasswordResponse}>
                    <div className={classes.formContainer}>
                        <form className={classes.form} noValidate>

                            <ValidatedTextField
                                label={t('auth:oldPassword')}
                                name="password"
                                type="password"
                                field={oldPasswordField}
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
                <DefaultCard title={t('user:details')}
                             divider>
                    <Grid container spacing={2}>
                        <LabeledData value={id} label={t('user:userId')} displayGrid/>
                        <LabeledData value={t(`user:${role}`)} label={t('user:role')} displayGrid/>
                        <LabeledData value={formatDateWithBackwardPeriod(userCreatedDate)}
                                     displayGrid/>

                    </Grid>
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
        maxWidth: 500,
        marginTop: theme.spacing(1),
    },
    formElement: {
        marginTop: 20
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
