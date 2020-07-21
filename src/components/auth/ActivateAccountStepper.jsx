import React from 'react';
import Stepper from "@material-ui/core/Stepper";
import {useTranslation} from "react-i18next";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";

const ActivateAccountStepper = props => {

    const {
        activeStep
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();
    const steps = [t('auth:enterYourEmail'), t('auth:enterProvidedVerificationCode'), t('auth:setUpYourPassword')]

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) =>
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                )}
            </Stepper>
        </div>
    );
};

ActivateAccountStepper.propTypes = {
    activeStep: PropTypes.number.isRequired
};

export default ActivateAccountStepper;

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '600px',
        margin: 'auto',
        marginBottom: theme.spacing(2)
    }
}));