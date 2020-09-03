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

const ProvideVerificationCodeComponentView = (props) => {

    const {
        verificationCodeField,
        onVerifyCodeSubmit,
        email,
        loading,
        error,
        errorResponse
    } = props;

    const classes = useStyles();
    const {t} = useTranslation();


    return (
        <div className={classes.loginContainer}>
            <ActivateAccountStepper activeStep={1} className={classes.loginCard}/>

            <Card className={classes.loginCard}>
                <CardContent>
                    <Typography component="h1" variant="h5" className={classes.signInTitle}>
                        {t('auth:verificationCode')}
                    </Typography>
                    <Typography className={classes.signInDesc}>
                        {t('auth:provideVerificationCodeDesc').replace("${email}", email)}
                    </Typography>
                    <form className={classes.form} noValidate>
                        <ValidatedTextField
                            label={t('auth:verificationCode')}
                            name="number"
                            type="number"
                            field={verificationCodeField}
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
                            onClick={onVerifyCodeSubmit}
                            disabled={loading}
                        >
                            {t('auth:verify')}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>

    );
};

ProvideVerificationCodeComponentView.propTypes = {};

export default ProvideVerificationCodeComponentView;

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
