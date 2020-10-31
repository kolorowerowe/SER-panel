import React, {useMemo} from "react";
import {SponsorshipPackage, Translation} from "../../../../declarations/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import DefaultCard from "../../../../generic/displayData/DefaultCard";
import SecondaryTypography from "../../../../generic/displayData/SecondaryTypography";
import LeftRightData from "../../../../generic/displayData/LeftRightData";
import {Button, CardActions, Grid} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {joinPrices} from "../../../../utils/general";
import {useCommonStyles} from "../../../../styles/commonStyles";
import {getRightTranslation} from "../../../../utils/translationUtils";


type Props = {
    sponsorshipPackage: SponsorshipPackage;
    setChosenSponsorshipPackageId: (id: string) => void;
}

const SponsorshipPackageCardComponent: React.FC<Props> = ({sponsorshipPackage, setChosenSponsorshipPackageId}: Props) => {

    const {
        id,
        translations,
        prices,
        standSize,
        isAvailable
    } = sponsorshipPackage;

    const {languageCode} = useSelector((state: RootState) => state.preferences);
    const {t} = useTranslation();
    const styles = useCommonStyles();


    const translation = useMemo(
        (): Translation => getRightTranslation(sponsorshipPackage.translations, languageCode),
        [sponsorshipPackage, languageCode]);

    return (<DefaultCard title={translation.name} divider disabled={!isAvailable}>
        <Grid container spacing={1}>
            <Grid item xs={12} className={styles.description}>
                <SecondaryTypography label={translation.description}/>
            </Grid>
            <Grid item xs={12}/>
            <Grid item xs={12}>
                <LeftRightData left={t('general:standSize')} right={standSize + ' m2'}/>
            </Grid>
            <Grid item xs={12}>
                <LeftRightData left={t('general:price')} right={joinPrices(prices)}/>
            </Grid>
            <Grid item xs={12} style={{height: 'auto'}}/>

        </Grid>

        <CardActions className={styles.cardActions}>

            <Button onClick={(): void => setChosenSponsorshipPackageId(id)}
                    color="primary"
                    disabled={!isAvailable}
            >
                {isAvailable ? t('general:details') : t('sponsorshipPackage:spIsNotAvailable')}
            </Button>


        </CardActions>
    </DefaultCard>);
}

export default SponsorshipPackageCardComponent;
