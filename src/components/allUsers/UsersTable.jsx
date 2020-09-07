import React from 'react';
import UserRow from "./UserRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import {useTranslation} from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useNavigate} from "react-router";

const UsersTable = props => {

    const {
        users = []
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();
    const navigate = useNavigate();


    const handleOpenUser = (userId) => {
        navigate(`/user/${userId}`)
    }

    return (
        <TableContainer component={'div'}>
            <Table>
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.header}>{t('auth:email')}</TableCell>
                        <TableCell align="center" className={classes.header}>{t('user:fullName')}</TableCell>
                        <TableCell align="center" className={classes.header}>{t('user:role')}</TableCell>
                        <TableCell align="center" className={classes.header}>{t('user:companies')}</TableCell>
                        <TableCell align="center" className={classes.header}>{t('user:lastSeen')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, index) => (
                        <UserRow key={user.id} user={user} index={index} handleOpenUser={handleOpenUser}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

UsersTable.propTypes = {

};

export default UsersTable;

const useStyles = makeStyles(theme => ({
    header: {
        fontWeight: 600
    }
}));