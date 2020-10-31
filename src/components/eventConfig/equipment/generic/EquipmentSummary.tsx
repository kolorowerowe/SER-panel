import React, {useMemo} from 'react';
import {SPEquipment, Translation} from "../../../../declarations/types";
import {getRightTranslation} from "../../../../utils/translationUtils";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {Tooltip, Typography} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useCommonStyles} from "../../../../styles/commonStyles";


type EquipmentElementProps = {
    spEquipment: SPEquipment;
}
const EquipmentElement: React.FC<EquipmentElementProps> = ({spEquipment}: EquipmentElementProps) => {

    const {
        count = 0,
        equipment: {
            translations = [],
        } = {},
    } = spEquipment;

    const {languageCode} = useSelector((state: RootState) => state.preferences);

    const translation = useMemo(
        (): Translation => getRightTranslation(translations, languageCode),
        [translations, languageCode]);

    return (
        <Tooltip title={translation.name + ' - ' + translation.description} placement={'bottom-start'}>
            <Typography>
                {count}x {translation.name}
            </Typography>
        </Tooltip>

    );
}


interface Props {
    spEquipmentList: SPEquipment[];
}

const EquipmentSummary: React.FC<Props> = (props: Props) => {

    const {
        spEquipmentList
    } = props;

    const {t} = useTranslation();
    const classes = useCommonStyles();

    return (
        <div>
            <Typography className={classes.secondaryField}>
                {t('sponsorshipPackage:equipment')}
            </Typography>

            {spEquipmentList.map(spEquipment => <EquipmentElement spEquipment={spEquipment}
                                                                  key={spEquipment.id}/>)}
        </div>
    );
};

export default EquipmentSummary;