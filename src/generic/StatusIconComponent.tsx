import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import DoneIcon from "@material-ui/icons/Done";
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
    ok: {
        color: theme.palette.success.main
    },
    warning: {
        color: theme.palette.warning.main
    },
    error: {
        color: theme.palette.error.main
    }
}));

type StatusIconComponentProps = {
    status: 'ok' | 'warning' | 'error';
    label?: string;
}


const StatusIconComponent: React.FC<StatusIconComponentProps> = ({status, label}: StatusIconComponentProps) => {

    const classes = useStyles();

    return (label === undefined) ?
        <div>
            {status === 'ok' && <DoneIcon className={classes.ok}/>}
            {status === 'warning' && <WarningIcon className={classes.warning}/>}
            {status === 'error' && <CloseIcon className={classes.error}/>}
        </div>
        :
        <div>
            <Tooltip title={label}>
                <div>
                    {status === 'ok' && <DoneIcon className={classes.ok}/>}
                    {status === 'warning' && <WarningIcon className={classes.warning}/>}
                    {status === 'error' && <CloseIcon className={classes.error}/>}
                </div>
            </Tooltip>
        </div>

};


export default StatusIconComponent;
