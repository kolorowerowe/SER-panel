import React, {useMemo} from 'react';
import {useTranslation} from "react-i18next";
import DefaultCard from "../../../generic/displayData/DefaultCard";
import ErrorAlert from "../../../generic/ErrorAlert";
import {matchErrorCode} from "../../../utils/ErrorUtils";
import CustomAlert from "../../../generic/CustomAlert";
import {Button, CardActions, Grid, Typography} from "@material-ui/core";
import {useCommonStyles} from "../../../styles/commonStyles";
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import moment, {Moment} from "moment";
import MomentUtils from "@date-io/moment";


type Props = {
    loading: boolean;
    error?: object;
    errorResponse?: object;
    eventDate?: string;
    initializeEventDate: () => void;
    onEventDateChange: (date: Moment | null) => void;
    handleSave: () => void;
}


const EventConfigComponentView: React.FC<Props> = (props: Props) => {
    const {
        loading,
        error,
        errorResponse,
        eventDate,
        onEventDateChange,
        initializeEventDate,
        handleSave
    } = props;

    const {t} = useTranslation();
    const styles = useCommonStyles();

    const eventConfigNotInitialized = useMemo(
        () => matchErrorCode(errorResponse, 402),
        [errorResponse]);


    return (
        <DefaultCard title={t('general:eventConfig')}
                     divider
                     loading={loading}
        >


            <Grid container spacing={2} alignItems="center">

                {eventConfigNotInitialized ?
                    <Grid item xs={12}>
                        <CustomAlert severity={'warning'}
                                     message={t(`general:eventConfigNotInitialized`)}/>
                    </Grid>

                    :
                    <ErrorAlert error={error}
                                errorResponse={errorResponse}
                                displayGrid
                    />}

                {!!eventDate && <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>

                    <Grid item xs={12} lg={6}>
                        <Typography>
                            {t(`general:eventDate`)}
                        </Typography>
                        <Typography variant="body2" className={styles.secondaryField}>
                            ({moment(eventDate).fromNow()})
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <KeyboardDatePicker
                            label={t('general:date')}
                            format="DD/MM/yyyy"
                            value={eventDate}
                            onChange={onEventDateChange}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <KeyboardTimePicker
                            ampm={false}
                            label={t('general:time')}
                            format="HH:mm"
                            mask="__:__"
                            value={eventDate}
                            onChange={onEventDateChange}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>}

            </Grid>

            <CardActions className={styles.cardActions}>
                {eventConfigNotInitialized && !eventDate && <Button onClick={initializeEventDate}
                                                                    color="primary"
                                                                    variant="contained">
                    {t('general:defineEventDate')}
                </Button>}
                {!!eventDate && <Button onClick={handleSave}
                                        color="primary"
                                        variant="contained">
                    {t('general:save')}
                </Button>}

            </CardActions>
        </DefaultCard>
    );
};


export default EventConfigComponentView;
