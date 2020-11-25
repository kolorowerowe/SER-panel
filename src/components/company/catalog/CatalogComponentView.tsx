import React from 'react';
import {ValidatedField} from "../../../declarations/types";
import DefaultCard from "../../../generic/displayData/DefaultCard";
import {useTranslation} from "react-i18next";
import CenteredColumnComponent from "../../../generic/displayData/CenteredColumnComponent";
import {Grid} from "@material-ui/core";
import ValidatedTextField from "../../../generic/input/ValidatedTextField";
import CheckboxInput from "../../../generic/input/CheckboxInput";
import Button from "@material-ui/core/Button";


type Props = {
    loading: boolean;
    onSaveCatalogSubmit: () => void;

    companyNameField: ValidatedField;
    descriptionField: ValidatedField;
    emailField: ValidatedField;
    websiteField: ValidatedField;
    businessProfileField: ValidatedField;

    numberOfEmployeesPolandField: ValidatedField;
    numberOfEmployeesWorldwideField: ValidatedField;
    candidateRequirementsField: ValidatedField;
    mainOfficeLocationField: ValidatedField;
    subsidiaryOfficesLocationsField: ValidatedField;
    numberOfJobVacanciesField: ValidatedField;

    paidInternships: boolean;
    setPaidInternships: (paidInternships: boolean) => void;

    unpaidInternships: boolean;
    setUnpaidInternships: (paidInternships: boolean) => void;

    recruitmentContactNameField: ValidatedField;
    recruitmentContactEmailField: ValidatedField;
    recruitmentContactPhoneField: ValidatedField;
}


const CatalogComponentView: React.FC<Props> = (props: Props) => {

    const {
        loading,
        onSaveCatalogSubmit,

        companyNameField,
        descriptionField,
        emailField,
        websiteField,
        businessProfileField,

        numberOfEmployeesPolandField,
        numberOfEmployeesWorldwideField,
        candidateRequirementsField,
        mainOfficeLocationField,
        subsidiaryOfficesLocationsField,
        numberOfJobVacanciesField,

        paidInternships,
        setPaidInternships,

        unpaidInternships,
        setUnpaidInternships,

        recruitmentContactNameField,
        recruitmentContactEmailField,
        recruitmentContactPhoneField
    } = props;

    const {t} = useTranslation();

    return (
        <DefaultCard title={t('catalog:catalogData')}
                     divider>
            <CenteredColumnComponent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:companyName')}
                                            field={companyNameField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:description')}
                                            field={descriptionField}
                                            multiline
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:email')}
                                            field={emailField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:website')}
                                            field={websiteField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:businessProfile')}
                                            field={businessProfileField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:numberOfEmployeesPoland')}
                                            field={numberOfEmployeesPolandField}
                                            type={'number'}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:numberOfEmployeesWorldwide')}
                                            field={numberOfEmployeesWorldwideField}
                                            type={'number'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:candidateRequirements')}
                                            field={candidateRequirementsField}
                                            multiline
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:mainOfficeLocation')}
                                            field={mainOfficeLocationField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:subsidiaryOfficesLocations')}
                                            field={subsidiaryOfficesLocationsField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:numberOfJobVacancies')}
                                            field={numberOfJobVacanciesField}
                                            type={'number'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CheckboxInput checked={paidInternships}
                                       onChange={e => setPaidInternships(e.target.checked)}
                                       label={t('catalog:paidInternships')}/>

                    </Grid>
                    <Grid item xs={12}>
                        <CheckboxInput checked={unpaidInternships}
                                       onChange={e => setUnpaidInternships(e.target.checked)}
                                       label={t('catalog:unpaidInternships')}/>
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:recruitmentContactName')}
                                            field={recruitmentContactNameField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:recruitmentContactEmail')}
                                            field={recruitmentContactEmailField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatedTextField label={t('catalog:recruitmentContactPhone')}
                                            field={recruitmentContactPhoneField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={onSaveCatalogSubmit}
                            disabled={loading}
                        >
                            {t('catalog:saveCatalog')}
                        </Button>
                    </Grid>


                </Grid>
            </CenteredColumnComponent>
        </DefaultCard>
    );
};


export default CatalogComponentView;