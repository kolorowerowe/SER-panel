import React from 'react';
import MomentUtils from '@date-io/moment';
import {Grid, Theme, Typography} from "@material-ui/core";
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {DeadlineF} from "../../../declarations/types";
import moment, {Moment} from "moment";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
    gridContainer: {
        padding: theme.spacing(2)
    },
    secondaryField: {
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2)
    }
}));

type Props = {
    deadlineField: DeadlineF;
    handleDateChange: (date: Moment, order: number) => void;
};

const DeadlineField: React.FC<Props> = ({deadlineField, handleDateChange}: Props) => {

    const styles=useStyles();
    const {t} = useTranslation();

    const onChange = (date: Moment | null): void => {
        if (date === null) {
            handleDateChange(moment(), deadlineField.orderNumber)
        } else {
            handleDateChange(date, deadlineField.orderNumber)
        }
    }

    return (
        <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
            <Grid container spacing={2} alignItems="center" className={styles.gridContainer}>
                <Grid item xs={12} lg={6}>
                    <Typography>
                        {deadlineField.orderNumber}. {t(`deadline:${deadlineField.activity}`)}
                    </Typography>
                    <Typography variant="body2" className={styles.secondaryField}>
                        ({deadlineField.deadlineDate.fromNow()})
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <KeyboardDatePicker
                        label={t('general:date')}
                        format="DD/MM/yyyy"
                        value={deadlineField.deadlineDate}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} lg={3}>
                    <KeyboardTimePicker
                        ampm={false}
                        label={t('general:time')}
                        format="HH:mm"
                        mask="__:__"
                        value={deadlineField.deadlineDate}
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default DeadlineField;
