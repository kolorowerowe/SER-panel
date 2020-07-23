import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ValidatedTextField from "../../../generic/ValidatedTextField";
import {useTranslation} from "react-i18next";
import ErrorAlert from "../../../generic/ErrorAlert";
import ActivateAccountStepper from "../ActivateAccountStepper";
import ProgressBar from "../../../generic/ProgressBar";

const SetupPasswordComponentView = (props) => {

    const {
        onSetupPasswordSubmit,
        passwordField,
        repeatPasswordField,

        loading,
        error,
        errorResponse
    } = props;

    const classes = useStyles();
    const {t} = useTranslation();


    return (
        <div className={classes.loginContainer}>
            <ActivateAccountStepper activeStep={2} className={classes.loginCard}/>

            <Card className={classes.loginCard}>
                <CardContent>
                    <Typography component="h1" variant="h5" className={classes.signInTitle}>
                        {t('auth:setUpYourPassword')}
                    </Typography>
                    <Typography className={classes.signInDesc}>
                        {t('auth:setupPasswordDesc')}
                    </Typography>
                    <form className={classes.form} noValidate>
                        <ValidatedTextField
                            label={t('auth:newPassword')}
                            name="password"
                            type="password"
                            field={passwordField}
                            className={classes.formElement}
                        />

                        <ValidatedTextField
                            label={t('auth:repeatNewPassword')}
                            name="password"
                            type="password"
                            field={repeatPasswordField}
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
                            onClick={onSetupPasswordSubmit}
                            disabled={loading}
                        >
                            {t('general:save')}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>

    );
};

SetupPasswordComponentView.propTypes = {};

export default SetupPasswordComponentView;

const useStyles = makeStyles((theme) => ({
    loginContainer: {
        width: '100%',
    },
    loginCard: {
        maxWidth: '600px',
        width: '100%',
        margin: 'auto',
    },
    signInTitle: {
        display: 'flex',
        justifyContent: 'center'
    },
    signInDesc: {
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(2)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    formElement: {
        marginTop: 20
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
