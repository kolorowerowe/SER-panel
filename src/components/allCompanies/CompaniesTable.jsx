import React from 'react';
import CompanyRow from "./CompanyRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import {useTranslation} from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useNavigate} from "react-router";

const CompaniesTable = props => {

    const {
        companies = []
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();
    const navigate = useNavigate();


    const handleOpenCompany = (companyId) => {
        navigate(`/company/${companyId}`)
    }

    return (
        <TableContainer component={'div'}>
            <Table>
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.header}>{t('company:companyName')}</TableCell>
                        <TableCell align="center" className={classes.header}>{t('company:primaryUserFullName')}</TableCell>
                        <TableCell align="center" className={classes.header}>{t('sponsorshipPackage:sponsorshipPackageName')}</TableCell>
                        <TableCell align="center" className={classes.header}>{t('deadline:progress')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {companies.map(company => (
                        <CompanyRow key={company.id} company={company} handleOpenCompany={handleOpenCompany}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

CompaniesTable.propTypes = {

};

export default CompaniesTable;

const useStyles = makeStyles(theme => ({
    header: {
        fontWeight: 600
    }
}));