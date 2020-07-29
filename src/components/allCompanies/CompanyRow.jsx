import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTranslation} from "react-i18next";

const CompanyRow = props => {

    const {
        company: {
            id,
            primaryUserId,
            name,
            contactPhone,
            taxId,
        },
        handleOpenCompany
    } = props;

    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <TableRow hover onClick={() => handleOpenCompany(id)}>
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell align="center">{taxId}</TableCell>
        </TableRow>
    );
};

CompanyRow.propTypes = {};

export default CompanyRow;

const useStyles = makeStyles(theme => ({
    ok: {
        color: theme.palette.success.main
    },
    error: {
        color: theme.palette.error.main
    }
}));
