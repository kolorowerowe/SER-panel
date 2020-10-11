import React, {useMemo, useState} from 'react';
import {Equipment, Translation} from "../../../../declarations/types";
import {Grid, Typography} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import {getRightTranslation} from "../../../../utils/translationUtils";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import SelectComponent from "../../../../generic/input/SelectComponent";
import {generateSelectValues} from "../../../../utils/NumberUtils";
import CenteredColumnComponent from "../../../../generic/displayData/CenteredColumnComponent";

interface Props {
    equipment: Equipment;
    onAddEquipmentSubmit: (equipmentId: string, count: number) => void;
}

const AvailableEquipmentElement: React.FC<Props> = (props: Props) => {

    const {
        equipment: {
            id,
            translations,
            maxCountPerCompany
        },
        onAddEquipmentSubmit
    } = props;

    const {languageCode} = useSelector((state: RootState) => state.preferences);


    const translation = useMemo(
        (): Translation => getRightTranslation(translations, languageCode),
        [translations, languageCode]);

    const [selectedCount, setSelectedCount] = useState<number>(0);

    const possibleValues = useMemo(() => generateSelectValues(0, maxCountPerCompany), [maxCountPerCompany]);

    return (
        <CenteredColumnComponent>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={12} sm={6}>
                    <Typography>
                        {translation.name}
                    </Typography>
                </Grid>
                <Grid item xs={9} sm={4}>
                    <SelectComponent value={selectedCount}
                                     onChange={(event): void => setSelectedCount(event.target.value as number)}
                                     possibleValues={possibleValues}/>
                </Grid>
                <Grid item xs={3} sm={2}>
                    <IconButton onClick={(): void => onAddEquipmentSubmit(id, selectedCount)}
                                disabled={selectedCount === 0}>
                        <AddIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </CenteredColumnComponent>

    );
};

export default AvailableEquipmentElement;
