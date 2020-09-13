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
import {useCommonStyles} from "../../../../utils/commonStyles";


type Props = {
    sponsorshipPackage: SponsorshipPackage;
}

const SponsorshipPackageCardComponent: React.FC<Props> = ({sponsorshipPackage}: Props) => {

    const {
        translations,
        prices,
        standSize,
        isAvailable
    } = sponsorshipPackage;

    const {languageCode} = useSelector((state: RootState) => state.preferences);
    const {t} = useTranslation();
    const styles = useCommonStyles();


    const translation = useMemo(
        (): Translation => {
            const rightTranslation = translations.find(t => t.languageCode === languageCode);
            if (rightTranslation) {
                return rightTranslation
            }
            const fallbackTranslation = translations.find(t => t.languageCode === 'en');
            if (fallbackTranslation) {
                return fallbackTranslation
            }
            return {
                languageCode: '-',
                name: '-',
                description: '-'
            } as Translation;

        }, [sponsorshipPackage, languageCode])

    return (<DefaultCard title={translation.name} divider>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <SecondaryTypography label={translation.description}/>
            </Grid>
            <Grid item xs={12}/>
            <Grid item xs={12}>
                <LeftRightData left={t('general:standSize')} right={standSize + ' m2'}/>
            </Grid>
            <Grid item xs={12}>
                <LeftRightData left={t('general:price')} right={joinPrices(prices)}/>
            </Grid>

        </Grid>

        <CardActions className={styles.cardActions}>

            <Button onClick={() => {}}
                    color="primary"

            >
                {t('general:details')}
            </Button>
        </CardActions>
    </DefaultCard>);
}

export default SponsorshipPackageCardComponent;
