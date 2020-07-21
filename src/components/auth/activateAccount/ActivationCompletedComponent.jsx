import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTranslation} from "react-i18next";
import ActivateAccountStepper from "../ActivateAccountStepper";
import {useHistory} from "react-router";

const ActivationCompletedComponent = (props) => {


    const classes = useStyles();
    const {t} = useTranslation();
    const history = useHistory();

    const handleRedirectToLogin = () => {
        history.push('/login')
    }

    return (
        <div className={classes.loginContainer}>
            <ActivateAccountStepper activeStep={3} className={classes.loginCard}/>

            <Card className={classes.loginCard}>
                <CardContent>
                    <Typography component="h1" variant="h5" className={classes.signInTitle}>
                        {t('auth:congratulations')}
                    </Typography>
                    <Typography className={classes.signInDesc}>
                        {t('auth:activationCompletedDesc')}
                    </Typography>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleRedirectToLogin}
                    >
                        {t('auth:redirectToLogin')}
                    </Button>
                </CardContent>
            </Card>
        </div>

    );
};

ActivationCompletedComponent.propTypes = {};

export default ActivationCompletedComponent;

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
