import React from 'react';
import CustomAlert from "./CustomAlert";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import {closeSnackbarAction} from "../redux/actions/snackbarActions";

const CustomSnackBar = () => {

    const {
        open = false,
        message = '',
        severity = ''
    } = useSelector(state => state.snackbar);

    const dispatch = useDispatch();


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        closeSnackbarAction(dispatch);
    };


    return (
        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <CustomAlert message={message} severity={severity} onClose={handleClose}/>
        </Snackbar>
    );
};

export default CustomSnackBar;
