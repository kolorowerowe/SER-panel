import React from 'react';
import {Company} from "../../../declarations/types";
import {Grid, Typography} from "@material-ui/core";
import DefaultCard from "../../../generic/DefaultCard";
import DataDisplay from "../../../generic/DataDisplay";
import moment from "moment";
import {useTranslation} from "react-i18next";

type Props = {
    companyId: string;
    company?: Company;
}

const CompanySummaryComponent: React.FC<Props> = ({companyId, company}: Props) => {


    const {t} = useTranslation();
    const {
        id,
        primaryUserId,
        companyCreatedDate
    } = company || {};

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <DefaultCard title={t('company:checklist')}
                             divider>
                    <Typography>
                        //TODO: checklista
                    </Typography>
                </DefaultCard>
            </Grid>
            <Grid item xs={12}>
                <DefaultCard title={t('company:companyDetails')}
                             divider>

                    <Grid container spacing={2}>

                        <DataDisplay label={t('company:companyId')}
                                     value={id}
                                     displayGrid/>

                        <DataDisplay label={t('company:primaryUserId')}
                                     value={primaryUserId}
                                     displayGrid/>
                        <DataDisplay label={t('company:createdDate')}
                                     value={moment(companyCreatedDate).format('LL') + " (" + moment(companyCreatedDate).fromNow() + ")"}
                                     displayGrid/>
                    </Grid>
                </DefaultCard>
            </Grid>

        </Grid>
    );
};


export default CompanySummaryComponent;
