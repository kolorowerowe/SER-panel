import React from 'react';
import Grid from "@material-ui/core/Grid";
import CompanyTileComponentContainer from "./company/CompanyTileComponentContainer";
import Typography from "@material-ui/core/Typography";
import RegisterCompanyComponentContainer from "./company/RegisterCompanyComponentContainer";
import CountdownComponent from "../../generic/displayData/CountdownComponent";
import {useTranslation} from "react-i18next";
import DefaultCard from "../../generic/displayData/DefaultCard";
import {Divider} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import UserStatistics from "./statistics/UserStatistics";
import UserStatisticsComponent from "./statistics/UserStatistics";

const HomeComponentView = (props) => {

    const {
        isAdmin,
        isOrganizer,
        isCompany,
        activeUser: {
            user: {
                fullName,
                role = ''
            } = {},
        } = {},
        statistics: {
            userStatistics
        } = {},
        companies: {
            companies
        } = {},
        timeLeftToEvent
    } = props;

    const {t} = useTranslation();
    console.log(role)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <DefaultCard title={t('general:hello') + ' ' + fullName}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <VerifiedUserIcon fontSize={'small'} color={'disabled'}/>
                        <Typography color={'textSecondary'}>
                            {t(`user:${role}`)}
                        </Typography>
                    </div>

                    <Divider style={{margin: '20px 0px'}}/>
                    <Typography align={'center'}>
                        {t('general:timeLeftToEvent')}
                    </Typography>
                    <CountdownComponent timeLeft={timeLeftToEvent}/>
                </DefaultCard>
            </Grid>

            {isCompany && !!companies && (companies.length > 0 ?
                companies.map((company) =>
                    <Grid item xs={12} key={company.id}>
                        <CompanyTileComponentContainer company={company}/>
                    </Grid>) :
                <Grid item xs={12}>
                    <RegisterCompanyComponentContainer/>
                </Grid>)
            }


            {(isAdmin || isOrganizer) && <Grid item xs={6}>
                <UserStatisticsComponent userStatistics={userStatistics}/>
            </Grid>
            }
        </Grid>

    );
};


export default HomeComponentView;
