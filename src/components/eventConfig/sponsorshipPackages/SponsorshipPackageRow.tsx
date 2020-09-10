import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTranslation} from "react-i18next";
import getSymbolFromCurrency from "currency-symbol-map";
import {SponsorshipPackage} from "../../../declarations/types";
import StatusIconComponent from "../../../generic/StatusIconComponent";


const useStyles = makeStyles(theme => ({
    ok: {
        color: theme.palette.success.main
    },
    error: {
        color: theme.palette.error.main
    }
}));

type Props = {
    sponsorshipPackage: SponsorshipPackage;
    handleOpenSponsorshipPackage: ((id: string) => void);
}

const SponsorshipPackageRow: React.FC<Props> = ({sponsorshipPackage, handleOpenSponsorshipPackage}: Props) => {

    const {
        id,
        translations = [],
        prices,
        standSize,
        isAvailable
    } = sponsorshipPackage;

    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <TableRow hover onClick={(): void => handleOpenSponsorshipPackage(id)}>
            <TableCell component="th" scope="row">
                {translations.map(translation => translation.name).join(" / ")}
            </TableCell>
            <TableCell align="center">{standSize}</TableCell>
            <TableCell
                align="center">{prices.map(price => (price.value + getSymbolFromCurrency(price.currency))).join(" / ")}</TableCell>
            <TableCell align="center">
                {isAvailable ?
                    <StatusIconComponent status={'ok'}
                                         label={t('sponsorshipPackage:available')}/>
                    :
                    <StatusIconComponent status={'error'}
                                         label={t('sponsorshipPackage:notAvailable')}/>
                }
            </TableCell>
        </TableRow>
    );
};

export default SponsorshipPackageRow;
