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
import CheckboxInput from "../../../generic/input/CheckboxInput";
import {Grid} from "@material-ui/core";

const ActivateAccountComponentView = (props) => {

    const {
        onSendVerificationCodeSubmit,
        emailField,
        checkedInformationAboutDataProcessing,
        setCheckedInformationAboutDataProcessing,
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
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <ValidatedTextField
                                    label={t('auth:email')}
                                    name="email"
                                    autoComplete="email"
                                    field={emailField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CheckboxInput checked={checkedInformationAboutDataProcessing}
                                               onChange={e => setCheckedInformationAboutDataProcessing(e.target.checked)}
                                               label={t('law:dataProcessingConfirmation')}/>
                            </Grid>

                            <ErrorAlert error={error}
                                        errorResponse={errorResponse}
                                        displayGrid/>

                            <ProgressBar loading={loading} displayGrid/>

                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={onSendVerificationCodeSubmit}
                                    disabled={loading || !emailField.value || !checkedInformationAboutDataProcessing}
                                >
                                    {t('auth:sendVerificationCode')}
                                </Button>
                            </Grid>
                        </Grid>


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
