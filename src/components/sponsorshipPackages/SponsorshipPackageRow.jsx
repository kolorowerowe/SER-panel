import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTranslation} from "react-i18next";
import Tooltip from "@material-ui/core/Tooltip";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import getSymbolFromCurrency from "currency-symbol-map";

const SponsorshipPackageRow = props => {

    const {
        sponsorshipPackage: {
            id,
            translations = [],
            prices,
            standSize,
            isAvailable
        } = {},
        handleOpenSponsorshipPackage
    } = props;

    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <TableRow hover onClick={() => handleOpenSponsorshipPackage(id)}>
            <TableCell component="th" scope="row">
                {translations.map(translation => translation.name).join(" / ")}
            </TableCell>
            <TableCell align="center">{standSize}</TableCell>
            <TableCell align="center">{prices.map(price => (price.value + getSymbolFromCurrency(price.currency))).join(" / ")}</TableCell>
            <TableCell align="center">
                {isAvailable ?
                    <Tooltip title={t('sponsorshipPackage:available')}>
                        <DoneIcon className={classes.ok}/>
                    </Tooltip>
                    :
                    <Tooltip title={t('sponsorshipPackage:notAvailable')}>
                        <CloseIcon className={classes.error}/>
                    </Tooltip>
                }
            </TableCell>
        </TableRow>
    );
};

SponsorshipPackageRow.propTypes = {};

export default SponsorshipPackageRow;

const useStyles = makeStyles(theme => ({
    ok: {
        color: theme.palette.success.main
    },
    error: {
        color: theme.palette.error.main
    }
}));
