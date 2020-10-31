import React, {useMemo} from 'react';
import {useTranslation} from "react-i18next";
import DefaultCard from "../../../generic/displayData/DefaultCard";
import DeadlineField from "./DeadlineField";
import {DeadlineF} from "../../../declarations/types";
import ErrorAlert from "../../../generic/ErrorAlert";
import {matchErrorCode} from "../../../utils/ErrorUtils";
import CustomAlert from "../../../generic/CustomAlert";
import {Button, CardActions} from "@material-ui/core";
import {Moment} from "moment";
import {useCommonStyles} from "../../../styles/commonStyles";


type Props = {
    loading: boolean;
    error?: object;
    errorResponse?: object;
    deadlineFields?: DeadlineF[];
    initializeDeadlines: () => void;
    handleSave: () => void;
    handleDateChange: (date: Moment, index: number) => void;
}


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
    const styles = useCommonStyles();

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
