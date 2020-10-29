import React from 'react';
import DefaultCard from "../../../generic/displayData/DefaultCard";
import {UserStatistics} from "../../../declarations/types";
import CountUp from "react-countup";
import {useTranslation} from "react-i18next";
import DefaultPieChart from "./DefaultPieChart";

type Props = {
    userStatistics?: UserStatistics;
}

const UserStatisticsComponent: React.FC<Props> = ({userStatistics}: Props) => {

    const {
        allUsersCount = 0,
        roleOccurrenceList = []
    } = userStatistics || {};

    const {t} = useTranslation();

    const chartData = roleOccurrenceList.map(({object, occurrences}) => ({name: t(`user:${object}`), value: occurrences}))

    return (
        <DefaultCard title={t('statistics:users')}>
            <CountUp end={allUsersCount}/>
            <DefaultPieChart data={chartData}/>
        </DefaultCard>
    );
};


export default UserStatisticsComponent;