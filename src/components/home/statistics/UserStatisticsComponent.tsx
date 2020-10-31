import React from 'react';
import DefaultCard from "../../../generic/displayData/DefaultCard";
import {UserStatistics} from "../../../declarations/types";
import CountUp from "react-countup";
import {useTranslation} from "react-i18next";
import DefaultBarChart from "./DefaultBarChart";
import {Grid, Typography} from "@material-ui/core";
import {useCommonStyles} from "../../../styles/commonStyles";

type Props = {
    userStatistics?: UserStatistics;
}

const UserStatisticsComponent: React.FC<Props> = ({userStatistics}: Props) => {

    const {
        allUsersCount = 0,
        roleOccurrenceList = []
    } = userStatistics || {};

    const {t} = useTranslation();
    const styles = useCommonStyles();
    const chartData = roleOccurrenceList.map(({object, occurrences}) => ({
        name: t(`user:${object}`),
        value: occurrences
    }))

    return (
        <DefaultCard title={t('statistics:users')}>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={5} className={styles.centeredDiv}>
                    <Typography variant={'h5'} align={'center'}>
                        {t('statistics:allUsers')}
                    </Typography>
                    <CountUp end={allUsersCount} className={styles.countUp}/>

                </Grid>
                <Grid item xs={7} className={styles.centeredDiv}>
                    <DefaultBarChart data={chartData}/>
                </Grid>
            </Grid>
        </DefaultCard>
    );
};


export default UserStatisticsComponent;