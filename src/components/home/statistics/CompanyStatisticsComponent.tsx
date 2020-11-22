import React from 'react';
import DefaultCard from "../../../generic/displayData/DefaultCard";
import {CompanyStatistics, UserStatistics} from "../../../declarations/types";
import CountUp from "react-countup";
import {useTranslation} from "react-i18next";
import DefaultBarChart from "./DefaultBarChart";
import {Grid, Typography} from "@material-ui/core";
import {useCommonStyles} from "../../../styles/commonStyles";

type Props = {
    companyStatistics?: CompanyStatistics;
}

const CompanyStatisticsComponent: React.FC<Props> = ({companyStatistics}: Props) => {

    const {
        allCompaniesCount = 0,
    } = companyStatistics || {};

    const {t} = useTranslation();
    const styles = useCommonStyles();

    return (
        <DefaultCard title={t('statistics:companies')}>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={12} className={styles.centeredDiv}>
                    <Typography variant={'h5'} align={'center'}>
                        {t('statistics:allCompanies')}
                    </Typography>
                    <CountUp end={allCompaniesCount} className={styles.countUp}/>
                </Grid>
            </Grid>
        </DefaultCard>
    );
};


export default CompanyStatisticsComponent;