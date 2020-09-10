import React from 'react';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import {useTranslation} from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useNavigate} from "react-router";
import SponsorshipPackageRow from "./SponsorshipPackageRow";

const SponsorshipPackagesTable = props => {

    const {
        sponsorshipPackages = []
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();
    const navigate = useNavigate();


    const handleOpenSponsorshipPackage = (sponsorshipPackageId) => {
        navigate(`/sponsorship-package/${sponsorshipPackageId}`)
    }

    return (
        <TableContainer component={'div'}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell
                            className={classes.header}>{t('sponsorshipPackage:sponsorshipPackageName')}</TableCell>
                        <TableCell align="center" className={classes.header}>{t('general:standSize')}</TableCell>
                        <TableCell align="center" className={classes.header}>{t('general:price')}</TableCell>
                        <TableCell align="center"
                                   className={classes.header}>{t('sponsorshipPackage:isAvailable')}</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {sponsorshipPackages.map((sponsorshipPackage, index) => (
                        <SponsorshipPackageRow key={sponsorshipPackage.id} sponsorshipPackage={sponsorshipPackage}
                                               index={index}
                                               handleOpenSponsorshipPackage={handleOpenSponsorshipPackage}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

SponsorshipPackagesTable.propTypes = {};

export default SponsorshipPackagesTable;

const useStyles = makeStyles(theme => ({
    header: {
        fontWeight: 600
    }
}));