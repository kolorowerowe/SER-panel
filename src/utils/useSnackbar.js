import {useDispatch} from 'react-redux';
import {
    addStatusAction, closeSnackbarAction
} from '../redux/actions/snackbarActions';

export const useSnackbar = () => {
    const dispatch = useDispatch();

    const addStatus = (message, severity = 'info') => {
        addStatusAction(message, severity, dispatch);
    };

    const addSuccess = (message) => {
        addStatus(message, 'success');
    };

    const addError = (error) => {
        addStatus(error.message, 'error');
    };

    const dismiss = () => {
        closeSnackbarAction(dispatch);
    };

    return {
        addStatus,
        addError,
        addSuccess,
        dismiss
    }
};