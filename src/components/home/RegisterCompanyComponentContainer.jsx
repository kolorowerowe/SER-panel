import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import useFieldValidation from "../../utils/useFieldValidation";
import {noValidate} from "../../utils/Validators";
import ValidatedTextField from "../../generic/ValidatedTextField";
import {createCompanyAction} from "../../redux/actions/companiesActions";
import {useSnackbar} from "../../utils/useSnackbar";
import IconButton from "@material-ui/core/IconButton";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";


const RegisterCompanyComponentContainer = (props) => {


    const {authToken} = useSelector(state => state.auth);
    const {
        user: {
            id,
            email,
            phoneNumber
        }
    } = useSelector(state => state.activeUser);

    const dispatch = useDispatch();
    const snackbar = useSnackbar();
    const {t} = useTranslation();
    const classes = useStyles();

    const [openRegisterCompanyDialog, setOpenRegisterCompanyDialog] = useState(false);

    const nameField = useFieldValidation('', noValidate);
    const contactPhoneField = useFieldValidation('', noValidate);
    const taxIdField = useFieldValidation('', noValidate);

    const pastePhone = () => {
        contactPhoneField.setValue(phoneNumber);
    }

    const submitForm = () => {

        const isError = [nameField, contactPhoneField, taxIdField].reduce((currentError, x) => (currentError || !!x.validate()), false);

        if (!isError) {
            const createCompanyBody = {
                name: nameField.value,
                contactPhone: contactPhoneField.value,
                taxId: taxIdField.value,
                primaryUserId: id
            }

            createCompanyAction(createCompanyBody, email, authToken, dispatch, snackbar);
            setOpenRegisterCompanyDialog(false);
        }

    }

    return (
        <Card className={classes.registerCompanyCard}>
            <Typography>
                {t('company:dontHaveCompany')}
            </Typography>
            <Button variant="contained"
                    color="primary"
                    className={classes.registerCompanyButton}
                    onClick={() => setOpenRegisterCompanyDialog(true)}>
                {t('company:registerCompany')}
            </Button>

            <Dialog open={openRegisterCompanyDialog} onClose={() => setOpenRegisterCompanyDialog(false)}>
                <DialogTitle>
                    {t('company:registerCompany')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t('company:registerCompanyDescription')}
                    </DialogContentText>
                    <ValidatedTextField
                        label={t('company:companyName')}
                        name="companyName"
                        field={nameField}
                        className={classes.formElement}
                        variant={'standard'}
                    />

                    <Grid container className={classes.formElement}>
                        <Grid item xs={11}>
                            <ValidatedTextField
                                label={t('company:contactPhone')}
                                name="contactPhone"
                                field={contactPhoneField}
                                variant={'standard'}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Tooltip title={t('company:pastePhone')}>
                                <IconButton
                                    onClick={pastePhone}
                                    edge="end"
                                >
                                    <PhoneIphoneIcon/>
                                </IconButton>
                            </Tooltip>

                        </Grid>
                    </Grid>

                    <ValidatedTextField
                        label={t('company:taxId')}
                        name="taxId"
                        field={taxIdField}
                        className={classes.formElement}
                        variant={'standard'}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenRegisterCompanyDialog(false)} color="primary" variant="outlined">
                        {t('general:cancel')}
                    </Button>
                    <Button onClick={submitForm} color="primary" variant="contained">
                        {t('general:submit')}
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

RegisterCompanyComponentContainer.propTypes = {}

export default RegisterCompanyComponentContainer;

const useStyles = makeStyles((theme) => ({
    registerCompanyCard: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(3)
    },
    registerCompanyButton: {
        marginTop: theme.spacing(2)
    },
    formElement: {
        marginTop: 20
    },
}));
