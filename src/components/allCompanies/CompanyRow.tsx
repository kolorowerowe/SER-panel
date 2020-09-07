import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTranslation} from "react-i18next";
import {Company} from "../../declarations/types";
import StatusIconComponent from "../../generic/StatusIconComponent";

const useStyles = makeStyles(theme => ({
    ok: {
        color: theme.palette.success.main
    },
    error: {
        color: theme.palette.error.main
    }
}));

type Props = {
    company: Company;
    handleOpenCompany: ((id: string) => void);
}


const CompanyRow: React.FC<Props> = ({company, handleOpenCompany}: Props) => {

    const {
        id,
        name,
        sponsorshipPackageId
    } = company;

    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <TableRow hover onClick={(): void => handleOpenCompany(id)}>
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell align="center">
                {sponsorshipPackageId === undefined ?
                    <StatusIconComponent status={'error'} label={t('sponsorshipPackage:notChosenYet')}/>
                    : sponsorshipPackageId
                }
            </TableCell>
        </TableRow>
    );
};

export default CompanyRow;
