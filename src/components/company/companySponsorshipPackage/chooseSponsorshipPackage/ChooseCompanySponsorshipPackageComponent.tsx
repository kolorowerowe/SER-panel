import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {fetchSponsorshipPackagesAction} from "../../../../redux/actions/sponsorshipPackagesActions";
import {CompanyResponse, SponsorshipPackage} from "../../../../declarations/types";
import {Grid} from "@material-ui/core";
import SponsorshipPackageCardComponent from "./SponsorshipPackageCardComponent";
import ConfirmSponsorshipPackageDialog from "./ConfirmSponsorshipPackageDialog";
import CustomAlert from "../../../../generic/CustomAlert";
import {useTranslation} from "react-i18next"
import {useCommonStyles} from "../../../../utils/commonStyles";
import {setCompanySponsorshipPackageAction} from "../../../../redux/actions/companiesActions";

type Props = {
    company?: CompanyResponse;
}

const ChooseCompanySponsorshipPackageComponent: React.FC<Props> = ({company}: Props) => {

    const {
        id
    } = company || {};

    const {
        sponsorshipPackages = [],
        loading: SPLoading,
        error: SPError,
        errorResponse: SPErrorResponse
    } = useSelector((state: RootState) => state.sponsorshipPackages);

    const {authToken} = useSelector((state: RootState) => state.auth);


    const [chosenSponsorshipPackageId, setChosenSponsorshipPackageId] = useState<string>('');
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const styles = useCommonStyles();

    useEffect(() => {
        dispatch(fetchSponsorshipPackagesAction());
    }, []);

    const confirmChosenSponsorshipPackage = (): void => {
        if (!!company && !!company.id && !!chosenSponsorshipPackageId) {
            setCompanySponsorshipPackageAction(company.id, chosenSponsorshipPackageId, authToken, dispatch);
            setChosenSponsorshipPackageId('');
        }
    };


    return <div>
        <ConfirmSponsorshipPackageDialog chosenSponsorshipPackageId={chosenSponsorshipPackageId}
                                         setChosenSponsorshipPackageId={setChosenSponsorshipPackageId}
                                         sponsorshipPackages={sponsorshipPackages}
                                         confirmChosenSponsorshipPackage={confirmChosenSponsorshipPackage}/>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CustomAlert message={t('sponsorshipPackage:chooseSponsorshipPackage')}/>
            </Grid>

            {(sponsorshipPackages as SponsorshipPackage[])
                .map(sponsorshipPackage => <Grid item xs={12} md={6} key={sponsorshipPackage.id}
                                                 className={styles.fullHeight}>
                    <SponsorshipPackageCardComponent sponsorshipPackage={sponsorshipPackage}
                                                     setChosenSponsorshipPackageId={setChosenSponsorshipPackageId}/>
                </Grid>)
            }
        </Grid>

    </div>
}


export default ChooseCompanySponsorshipPackageComponent;