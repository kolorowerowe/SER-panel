import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ValidatedTextField from "../../../generic/ValidatedTextField";
import {useTranslation} from "react-i18next";
import ErrorAlert from "../../../generic/ErrorAlert";
import LinearProgress from "@material-ui/core/LinearProgress";

const LoginComponentView = (props) => {

    const {
        onLoginSubmit,
        emailField,
        passwordField,
        handleRedirectToActivateAccount,

        loading,
        error,
        errorResponse
    } = props;

    const classes = useStyles();
    const {t} = useTranslation();


    return (
        <div className={classes.loginContainer}>

            <Card className={classes.loginCard}>
                <CardContent>
                    <Typography component="h1" variant="h5" className={classes.signInTitle}>
                        {t('auth:signIn')}
                    </Typography>
                    <form className={classes.form} noValidate>
                        <ValidatedTextField
                            label={t('auth:email')}
                            name="email"
                            autoComplete="email"
                            field={emailField}
                            className={classes.formElement}
                        />
                        <ValidatedTextField
                            label={t('auth:password')}
                            name="password"
                            type="password"
                            field={passwordField}
                            className={classes.formElement}
                        />

                        <ErrorAlert error={error}
                                    errorResponse={errorResponse}
                                    className={classes.formElement}/>

                        {loading && <LinearProgress className={classes.formElement}/>}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onLoginSubmit}
                            disabled={loading}
                        >
                            {t('auth:signIn')}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    {t('auth:forgotPassword')}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/activate/email" variant="body2">
                                    {t('auth:firstTime')}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>

    );
};

LoginComponentView.propTypes = {};

export default LoginComponentView;

const useStyles = makeStyles((theme) => ({
    loginContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    loginCard: {
        maxWidth: '600px',
        width: '100%',
    },
    signInTitle: {
        display: 'flex',
        justifyContent: 'center'
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
