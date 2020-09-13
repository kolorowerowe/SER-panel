import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {useTranslation} from "react-i18next";
import {SponsorshipPackage} from "../../../declarations/types";
import StatusIconComponent from "../../../generic/StatusIconComponent";
import {joinPrices, joinTranslations} from "../../../utils/general";


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

    const {t} = useTranslation();

    return (
        <TableRow hover onClick={(): void => handleOpenSponsorshipPackage(id)}>
            <TableCell component="th" scope="row">
                {joinTranslations(translations)}
            </TableCell>
            <TableCell align="center">
                {standSize}
            </TableCell>
            <TableCell
                align="center">{joinPrices(prices)}
            </TableCell>
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
