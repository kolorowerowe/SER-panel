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
import {Equipment} from "../../../../declarations/types";
import {joinPrices, joinTranslations} from "../../../../utils/general";


const useStyles = makeStyles(theme => ({
    header: {
        fontWeight: 600
    }
}));


type EquipmentRowProps = {
    equipment: Equipment;
    handleOpenEquipment: ((id: string) => void);
}

const EquipmentRow: React.FC<EquipmentRowProps> = ({equipment, handleOpenEquipment}: EquipmentRowProps) => {

    const {
        id,
        translations = [],
        prices,
        maxCountPerCompany
    } = equipment;

    return (
        <TableRow hover onClick={(): void => handleOpenEquipment(id)}>
            <TableCell component="th" scope="row">
                {joinTranslations(translations)}
            </TableCell>
            <TableCell
                align="center">{joinPrices(prices)}
            </TableCell>
            <TableCell align="center">
                {maxCountPerCompany}
            </TableCell>
        </TableRow>
    );
};

type Props = {
    equipmentList: Equipment[];
}
const EquipmentTable: React.FC<Props> = ({equipmentList = []}: Props) => {

    const {t} = useTranslation();
    const classes = useStyles();
    const navigate = useNavigate();


    const handleOpenEquipment = (equipmentId: string): void => {
        navigate(`/equipment/${equipmentId}`)
    }

    return (
        <TableContainer component={'div'}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell
                            className={classes.header}>{t('sponsorshipPackage:name')}</TableCell>
                        <TableCell align="center" className={classes.header}>{t('general:price')}</TableCell>
                        <TableCell align="center"
                                   className={classes.header}>{t('sponsorshipPackage:maxCountPerCompany')}</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {equipmentList.map(equipment => (<EquipmentRow key={equipment.id}
                                                                   equipment={equipment}
                                                                   handleOpenEquipment={handleOpenEquipment}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};


export default EquipmentTable;

