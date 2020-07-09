import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ValidatedTextField from "../../generic/ValidatedTextField";
import {useTranslation} from "react-i18next";

const LoginComponentView = (props) => {

    const {
        onLoginSubmit,
        emailField,
        passwordField
    } = props;

    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <div className={classes.loginContainer}>

            <Card className={classes.loginCard}>
                <CardContent>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <ValidatedTextField
                            label="Email Address"
                            name="email"
                            autocomplete="email"
                            field={emailField}
                            className={classes.formElement}
                        />
                        <ValidatedTextField
                            label="Password"
                            name="password"
                            type="password"
                            field={passwordField}
                            className={classes.formElement}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onLoginSubmit}
                        >
                            {t('auth:signIn')}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
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
