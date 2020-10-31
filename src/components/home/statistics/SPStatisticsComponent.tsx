import React from 'react';
import DefaultCard from "../../../generic/displayData/DefaultCard";
import {SPStatistics} from "../../../declarations/types";
import CountUp from "react-countup";
import {useTranslation} from "react-i18next";
import {Grid, Typography} from "@material-ui/core";
import {useCommonStyles} from "../../../styles/commonStyles";
import ProgressLine from "./ProgressLine";
import {getRightTranslation} from "../../../utils/translationUtils";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

type Props = {
    sponsorshipPackageStatistics?: SPStatistics;
}

const SPStatisticsComponent: React.FC<Props> = ({sponsorshipPackageStatistics}: Props) => {

    const {
        allSPCount = 0,
        percentageProgressesSP = []
    } = sponsorshipPackageStatistics || {};

    const {t} = useTranslation();
    const styles = useCommonStyles();
    const {languageCode} = useSelector((state: RootState) => state.preferences);

    const sponsorshipPackageStatus = percentageProgressesSP.reduce(({current = 0, max = 0}, currentProgress) => ({
        current: current + currentProgress.currentProgress,
        max: max + currentProgress.maxProgress
    }), ({current: 0, max: 0}))


    return (
        <DefaultCard title={t('statistics:sponsorshipPackages')}>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={5} className={styles.centeredDiv}>
                    <Typography variant={'h5'} align={'center'}>
                        {t('statistics:sponsorshipPackagesTaken')}
                    </Typography>
                    <div className={styles.nextToEachOther}>
                        <CountUp end={sponsorshipPackageStatus.current} className={styles.countUp}/>
                        <Typography className={styles.countUp}
                                    style={{marginLeft: 10}}>/ {sponsorshipPackageStatus.max}</Typography>
                    </div>

                </Grid>
                <Grid item xs={7} className={styles.centeredDiv}>
                    {percentageProgressesSP.map(progress => {
                        const {name} = getRightTranslation(progress.object.translations, languageCode)

                        return <ProgressLine
                            currentProgress={progress.currentProgress}
                            maxProgress={progress.maxProgress}
                            label={name}
                        />
                    })}
                </Grid>
            </Grid>
        </DefaultCard>
    );
};


export default SPStatisticsComponent;