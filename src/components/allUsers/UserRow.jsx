import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CloseIcon from '@material-ui/icons/Close';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tooltip from "@material-ui/core/Tooltip";
import {useTranslation} from "react-i18next";
import moment from "moment";

const UserRow = props => {

    const {
        user: {
            id,
            email,
            fullName,
            lastSeen,
            isActivated,
            role,
            companyAccessList
        },
        handleOpenUser
    } = props;

    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <TableRow hover onClick={() => handleOpenUser(id)}>
            <TableCell component="th" scope="row">
                {email}
            </TableCell>
            <TableCell align="center">{fullName}</TableCell>
            <TableCell align="center">{role}</TableCell>
            <TableCell align="center">
                {companyAccessList.map(({companyName}) => companyName).join('\n')}
            </TableCell>
            <TableCell align="center">
                {isActivated ?
                    (moment(lastSeen).format('LLL'))
                    :
                    <Tooltip title={t('user:notActivated')}>
                        <CloseIcon className={classes.error}/>
                    </Tooltip>
                }
            </TableCell>
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
