import React, {useMemo, useState} from 'react';
import {SPEquipment, Translation} from "../../../../declarations/types";
import {Grid, Typography} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import {getRightTranslation} from "../../../../utils/translationUtils";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import CenteredColumnComponent from "../../../../generic/displayData/CenteredColumnComponent";
import DialogComponent from "../../../../generic/input/DialogComponent";
import {generateSelectValues} from "../../../../utils/NumberUtils";
import SelectComponent from "../../../../generic/input/SelectComponent";

interface Props {
    spEquipment: SPEquipment;
    onModifySpEquipmentSubmit: (spEquipmentId: string, count: number) => void;
    onDeleteSpEquipmentSubmit: (spEquipmentId: string) => void;
}

const CurrentEquipmentElement: React.FC<Props> = (props: Props) => {
    const {
        spEquipment: {
            id: spEquipmentId = '',
            count = 0,
            equipment: {
                translations = [],
                maxCountPerCompany = 0
            } = {},
        } = {},
        onModifySpEquipmentSubmit,
        onDeleteSpEquipmentSubmit
    } = props;

    const {languageCode} = useSelector((state: RootState) => state.preferences);
    const {t} = useTranslation();
    const translation = useMemo(
        (): Translation => getRightTranslation(translations, languageCode),
        [translations, languageCode]);

    const [editCurrentEquipmentDialogOpen, setEditCurrentEquipmentDialogOpen] = useState<boolean>(false);



    const EditCurrentEquipmentDialog: React.FC = () => {

        const possibleValues = useMemo(() => generateSelectValues(1, maxCountPerCompany), [maxCountPerCompany]);
        const [selectedCount, setSelectedCount] = useState<number>(count);

        const onModifySubmit = (): void => {
            onModifySpEquipmentSubmit(spEquipmentId, selectedCount);
            setEditCurrentEquipmentDialogOpen(false);
        };

        return <DialogComponent dialogOpen={editCurrentEquipmentDialogOpen}
                                setDialogOpen={setEditCurrentEquipmentDialogOpen}
                                onSubmit={onModifySubmit}
                                title={t('sponsorshipPackage:editEquipment') + ': ' + translation.name}
                                submitLabel={t('general:save')}>
            <CenteredColumnComponent maxWidth={400}>
                <SelectComponent value={selectedCount}
                                 onChange={(event): void => setSelectedCount(event.target.value as number)}
                                 possibleValues={possibleValues}
                                 label={t('sponsorshipPackage:equipmentCount')}
                />
            </CenteredColumnComponent>

        </DialogComponent>
    }

    return (
        <CenteredColumnComponent>
            <EditCurrentEquipmentDialog/>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={12} sm={6}>
                    <Typography>
                        {translation.name}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>
                        {t('general:pieces', {count: count})}
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={1}>
                    <IconButton onClick={(): void => setEditCurrentEquipmentDialogOpen(true)}>
                        <EditIcon/>
                    </IconButton>
                </Grid>
                <Grid item xs={6} sm={1}>
                    <IconButton onClick={(): void => onDeleteSpEquipmentSubmit(spEquipmentId)}>
                        <DeleteIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </CenteredColumnComponent>
    );
};

export default CurrentEquipmentElement;
