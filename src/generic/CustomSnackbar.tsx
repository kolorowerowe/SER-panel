import React, {SyntheticEvent} from 'react';
import CustomAlert from "./CustomAlert";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import {closeSnackbarAction} from "../redux/actions/snackbarActions";
import {RootState} from "../redux/store";

const CustomSnackBar: React.FC = () => {



    const {
        open,
        message,
        severity
    } = useSelector((state: RootState) => state.snackbar);

    const dispatch = useDispatch();


    const handleClose = (event: SyntheticEvent, reason: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        closeSnackbarAction(dispatch);
    };


    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <CustomAlert message={message} severity={severity} onClose={handleClose}/>
        </Snackbar>
    );
};

export default CustomSnackBar;
