import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useTranslation} from "react-i18next";
import useFieldValidation from "../../utils/useFieldValidation";
import {validateEmail} from "../../utils/Validators";
import ValidatedTextField from "../../generic/ValidatedTextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const AddNewUserDialog = props => {

    const {
        addNewUserDialogOpen,
        setAddNewUserDialogOpen
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();

    const emailField = useFieldValidation('', validateEmail);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleSubmit = () => {

    }

    return (
        <Dialog open={addNewUserDialogOpen}
                onClose={() => setAddNewUserDialogOpen(false)}
                fullWidth
                maxWidth={'md'}>
            <DialogTitle>
                {t('user:addNewUser')}
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <ValidatedTextField
                            label={t('auth:email')}
                            name="email"
                            field={emailField}
                            className={classes.formElement}
                            variant={'standard'}

                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label={t('user:fullName')}
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                            className={classes.formElement}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label={t('user:phoneNumber')}
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                            className={classes.formElement}
                            fullWidth
                        />
                    </Grid>
                </Grid>


            </DialogContent>
            <DialogActions>
                <Button onClick={() => setAddNewUserDialogOpen(false)}
                        color="primary"
                        variant="outlined"
                >
                    {t('general:cancel')}
                </Button>
                <Button onClick={handleSubmit}
                        color="primary"
                        variant="contained"
                >
                    {t('general:add')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddNewUserDialog;

const useStyles = makeStyles((theme) => ({
    formElement: {
        marginTop: 20
    }
}));

