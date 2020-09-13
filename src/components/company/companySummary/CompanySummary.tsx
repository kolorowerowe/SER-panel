import React from 'react';
import {CompanyDeadlineStatus, CompanyResponse} from "../../../declarations/types";
import {Grid, Theme, Typography} from "@material-ui/core";
import DefaultCard from "../../../generic/DefaultCard";
import DataDisplay from "../../../generic/DataDisplay";
import moment from "moment";
import {useTranslation} from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {formatDateWithBackwardPeriod} from "../../../utils/DateTimeUtils";

type Props = {
    companyId: string;
    company?: CompanyResponse;
}


const useStyles = makeStyles((theme: Theme) => ({
    gridContainer: {
        padding: theme.spacing(1)
    },
    completedDeadline: {
        color: theme.palette.text.secondary,
        textDecoration: 'line-through'
    },
    notCompletedDeadline: {},
    secondaryField: {
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2)
    }
}));

const CompanySummaryComponent: React.FC<Props> = ({companyId, company}: Props) => {

    const {
        id,
        primaryUser: {
            fullName = ''
        } = {},
        companyCreatedDate = '',
        companyDeadlineStatuses = []
    } = company || {};

    const {t} = useTranslation();
    const styles = useStyles();

    type CompanyDeadlineStatusFCProps = { companyDeadlineStatus: CompanyDeadlineStatus }
    const CompanyDeadlineStatusFC: React.FC<CompanyDeadlineStatusFCProps> = ({companyDeadlineStatus}: CompanyDeadlineStatusFCProps) => {

        return <Grid container spacing={1} alignItems="center" className={styles.gridContainer}>
            <Grid item xs={12} lg={8}>
                <Typography
                    className={companyDeadlineStatus.isFinished ? styles.completedDeadline : styles.notCompletedDeadline}>
                    {companyDeadlineStatus.orderNumber}. {t(`deadline:${companyDeadlineStatus.activity}`)}
                </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
                {!companyDeadlineStatus.isFinished && <Typography variant="body2" className={styles.secondaryField}>
                    ({t('deadline:deadline')} {moment(companyDeadlineStatus.deadlineDate).fromNow()})
                </Typography>}
            </Grid>
        </Grid>
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <DefaultCard title={t('company:checklist')}
                             divider>
                    {companyDeadlineStatuses.map(deadlineStatus =>
                        <CompanyDeadlineStatusFC companyDeadlineStatus={deadlineStatus}
                                                 key={deadlineStatus.orderNumber}/>)}
                </DefaultCard>
            </Grid>
            <Grid item xs={12}>
                <DefaultCard title={t('company:companyDetails')}
                             divider>

                    <Grid container spacing={2}>

                        <DataDisplay label={t('company:companyId')}
                                     value={id}
                                     displayGrid/>

                        <DataDisplay label={t('company:primaryUserFullName')}
                                     value={fullName}
                                     displayGrid/>
                        <DataDisplay label={t('company:createdDate')}
                                     value={formatDateWithBackwardPeriod(companyCreatedDate)}
                                     displayGrid/>
                    </Grid>
                </DefaultCard>
            </Grid>

        </Grid>
    );
};


export default CompanySummaryComponent;
