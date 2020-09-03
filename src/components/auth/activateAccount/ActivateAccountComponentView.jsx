import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ValidatedTextField from "../../../generic/input/ValidatedTextField";
import {useTranslation} from "react-i18next";
import ErrorAlert from "../../../generic/ErrorAlert";
import ActivateAccountStepper from "../ActivateAccountStepper";
import ProgressBar from "../../../generic/ProgressBar";

const ActivateAccountComponentView = (props) => {

    const {
        onSendVerificationCodeSubmit,
        emailField,

        loading,
        error,
        errorResponse
    } = props;

    const classes = useStyles();
    const {t} = useTranslation();


    return (
        <div className={classes.loginContainer}>
            <ActivateAccountStepper activeStep={0} className={classes.loginCard}/>

            <Card className={classes.loginCard}>
                <CardContent>
                    <Typography component="h1" variant="h5" className={classes.signInTitle}>
                        {t('auth:activateAccount')}
                    </Typography>
                    <Typography className={classes.signInDesc}>
                        {t('auth:activateAccountDesc')}
                    </Typography>
                    <form className={classes.form} noValidate>
                        <ValidatedTextField
                            label={t('auth:email')}
                            name="email"
                            autoComplete="email"
                            field={emailField}
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
                            onClick={onSendVerificationCodeSubmit}
                            disabled={loading}
                        >
                            {t('auth:sendVerificationCode')}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>

    );
};

ActivateAccountComponentView.propTypes = {};

export default ActivateAccountComponentView;

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
