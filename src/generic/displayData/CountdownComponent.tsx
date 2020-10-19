import React from 'react';
import {Duration} from "moment";
import {Typography} from "@material-ui/core";
import {useTranslation} from "react-i18next";


type LabeledUnitProps = {
    value: string|number;
    label: string;
    primary?: boolean;
}
const LabeledUnit: React.FC<LabeledUnitProps> = ({value, label, primary}: LabeledUnitProps) => {

    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: 100}}>
        <Typography variant={'h4'}>
            {value}
        </Typography>
        <Typography>
            {label}
        </Typography>
    </div>
}

type Props = {
    timeLeft: Duration;
}
const CountdownComponent: React.FC<Props> = ({timeLeft}: Props) => {
    const {t} = useTranslation();

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 10}}>
            <LabeledUnit value={Math.floor(timeLeft.asDays())} label={t('general:days')}/>
            <LabeledUnit value={timeLeft.hours()} label={t('general:hours')}/>
            <LabeledUnit value={timeLeft.minutes()} label={t('general:minutes')}/>
            <LabeledUnit value={timeLeft.seconds()} label={t('general:seconds')}/>
        </div>
    );
};


export default React.memo(CountdownComponent);
