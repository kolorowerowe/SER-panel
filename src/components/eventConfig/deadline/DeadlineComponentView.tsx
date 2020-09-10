import React, {useMemo} from 'react';
import {useTranslation} from "react-i18next";
import DefaultCard from "../../../generic/DefaultCard";
import DeadlineField from "./DeadlineField";
import {DeadlineF} from "../../../declarations/types";
import ErrorAlert from "../../../generic/ErrorAlert";
import {matchErrorCode} from "../../../utils/ErrorUtils";
import CustomAlert from "../../../generic/CustomAlert";
import {Button, CardActions} from "@material-ui/core";
import {Moment} from "moment";
import makeStyles from "@material-ui/core/styles/makeStyles";


type Props = {
    loading: boolean;
    error?: object;
    errorResponse?: object;
    deadlineFields?: DeadlineF[];
    initializeDeadlines: () => void;
    handleSave: () => void;
    handleDateChange: (date: Moment, index: number) => void;
}


const useStyles = makeStyles(theme => ({
    cardActions: {
        justifyContent: 'flex-end',
        marginTop: 20
    },

}));

const DeadlineComponentView: React.FC<Props> = (props: Props) => {
    const {
        loading,
        error,
        errorResponse,
        deadlineFields = [],
        handleSave,
        initializeDeadlines,
        handleDateChange
} = props;

    const {t} = useTranslation();
    const styles=useStyles();

    const deadlinesAreNotInitialized = useMemo(
        () => matchErrorCode(errorResponse, 401),
        [errorResponse]);


    return (
        <DefaultCard title={t('deadline:deadline')}
                     divider
                     loading={loading}
        >


            {deadlinesAreNotInitialized ?
                <CustomAlert severity={'warning'} message={t(`deadline:deadlinesNotInitialized`)}/>
                :
                <ErrorAlert error={error}
                            errorResponse={errorResponse}
                />}

            {deadlineFields.map(deadlineField => <DeadlineField deadlineField={deadlineField}
                                                                handleDateChange={handleDateChange}
                                                                key={deadlineField.activity}/>)}

            <CardActions className={styles.cardActions}>

                {deadlineFields.length === 0 && <Button onClick={initializeDeadlines}
                                                       color="primary"
                                                       variant="contained">
                    {t('deadline:defineDeadlines')}
                </Button>}

                {deadlineFields.length > 0 && <Button onClick={handleSave}
                                                      color="primary"
                                                      variant="contained">
                    {t('general:save')}
                </Button>}

            </CardActions>
        </DefaultCard>
    );
};


export default DeadlineComponentView;
