import React, {useMemo} from "react";
import {SponsorshipPackage, Translation} from "../../../declarations/types";
import DefaultCard from "../../../generic/displayData/DefaultCard";
import Grid from "@material-ui/core/Grid";
import {joinPrices} from "../../../utils/general";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {getRightTranslation} from "../../../utils/translationUtils";
import {useTranslation} from "react-i18next";
import LabeledData from "../../../generic/displayData/LabeledData";
import EquipmentSummary from "../../eventConfig/equipment/generic/EquipmentSummary";


type Props = {
    sponsorshipPackage?: SponsorshipPackage;
}

const CompanySponsorshipPackageInfoComponent: React.FC<Props> = ({sponsorshipPackage}: Props) => {

    const {
        id = '',
        translations = [],
        prices = [],
        standSize = 0,
        spEquipmentList = []
    } = sponsorshipPackage || {} as SponsorshipPackage;

    const {languageCode} = useSelector((state: RootState) => state.preferences);
    const {t} = useTranslation();

    const translation = useMemo(
        (): Translation => getRightTranslation(translations, languageCode),
        [translations, languageCode]);

    return <DefaultCard title={t('sponsorshipPackage:chosenSponsorshipPackage')} divider>
        <Grid container spacing={1}>
            <LabeledData label={t('sponsorshipPackage:name')} value={translation.name} displayGrid/>
            <LabeledData label={t('sponsorshipPackage:description')} value={translation.description} displayGrid/>
            <LabeledData label={t('general:standSize')} value={standSize + ' m2'} displayGrid/>
            <LabeledData label={t('general:price')} value={joinPrices(prices)} displayGrid/>

            <Grid item xs={12}>
                <EquipmentSummary spEquipmentList={spEquipmentList}/>
            </Grid>
        </Grid>
    </DefaultCard>
}

export default CompanySponsorshipPackageInfoComponent;