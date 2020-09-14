import React, {useMemo} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import {SponsorshipPackage, Translation} from "../../../../declarations/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {getRightTranslation} from "../../../../utils/translationUtils";
import LeftRightData from "../../../../generic/displayData/LeftRightData";
import {joinPrices} from "../../../../utils/general";

type Props = {
    chosenSponsorshipPackageId?: string;
    setChosenSponsorshipPackageId: (id: string) => void;
    sponsorshipPackages: SponsorshipPackage[];
    confirmChosenSponsorshipPackage: () => void;
}

const ConfirmSponsorshipPackageDialog = (props: Props) => {

    const {
        chosenSponsorshipPackageId,
        setChosenSponsorshipPackageId,
        sponsorshipPackages,
        confirmChosenSponsorshipPackage
    } = props;

    const {languageCode} = useSelector((state: RootState) => state.preferences);

    const chosenSponsorshipPackage = useMemo<SponsorshipPackage>((): SponsorshipPackage =>{
        const foundSP = sponsorshipPackages.find(sp => sp.id === chosenSponsorshipPackageId);
        if (foundSP !== undefined) {
            return foundSP
        } else {
            return {
                id: '',
                translations: [],
                prices: [],
                standSize: 0,
                isAvailable: false
            } as SponsorshipPackage
        }

    }, [chosenSponsorshipPackageId, sponsorshipPackages])

    const {t} = useTranslation();


    const translation = useMemo(
        (): Translation => getRightTranslation(chosenSponsorshipPackage.translations, languageCode),
        [chosenSponsorshipPackage, languageCode]);



    return (
        <Dialog open={!!chosenSponsorshipPackageId}
                onClose={(): void => setChosenSponsorshipPackageId('')}
                fullWidth
                maxWidth={'md'}>
            <DialogTitle>
                {t('sponsorshipPackage:confirmChosenSponsorship')}
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <LeftRightData left={t('sponsorshipPackage:name')} right={translation.name}/>
                    </Grid>
                    <Grid item xs={12}>
                        <LeftRightData left={t('sponsorshipPackage:description')} right={translation.description}/>
                    </Grid>
                    <Grid item xs={12}>
                        <LeftRightData left={t('general:standSize')} right={chosenSponsorshipPackage.standSize + ' m2'}/>
                    </Grid>
                    <Grid item xs={12}>
                        <LeftRightData left={t('general:price')} right={joinPrices(chosenSponsorshipPackage.prices)}/>
                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={(): void => setChosenSponsorshipPackageId('')}
                        color="primary"
                        variant="outlined"
                >
                    {t('general:cancel')}
                </Button>
                <Button onClick={confirmChosenSponsorshipPackage}
                        color="primary"
                        variant="contained"
                >
                    {t('sponsorshipPackage:confirmAndSave')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmSponsorshipPackageDialog;

