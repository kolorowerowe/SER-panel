import React, {useState} from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tooltip from "@material-ui/core/Tooltip";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router";

const UserRow = props => {

    const {
        index,
        user: {
            uuid,
            email,
            fullName,
            phoneNumber,
            lastSeenDate,
            userCreatedDate,
            isActivated,
            role
        },
        handleOpenUser
    } = props;

    const classes = useStyles();
    const {t} = useTranslation();



    const activatedIcon = (
        <Tooltip title={t('user:activated')}>
            <CheckIcon className={classes.ok}/>
        </Tooltip>
    )

    const notActivatedIcon = (
        <Tooltip title={t('user:notActivated')}>
            <CloseIcon className={classes.error}/>
        </Tooltip>
    )

    return (
        <TableRow hover onClick={() => handleOpenUser(uuid)}>
            <TableCell component="th" scope="row">
                {email}
            </TableCell>
            <TableCell align="center">{fullName}</TableCell>
            <TableCell align="center">{role}</TableCell>
            <TableCell align="center">{isActivated ? activatedIcon : notActivatedIcon}</TableCell>
        </TableRow>
    );
};

UserRow.propTypes = {};

export default UserRow;

const useStyles = makeStyles(theme => ({
    ok: {
        color: theme.palette.success.main
    },
    error: {
        color: theme.palette.error.main
    }
}));
