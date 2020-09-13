import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {fetchSponsorshipPackagesAction} from "../../../../redux/actions/sponsorshipPackagesActions";
import {CompanyResponse, SponsorshipPackage} from "../../../../declarations/types";
import {Grid, Typography} from "@material-ui/core";
import SponsorshipPackageCardComponent from "./SponsorshipPackageCardComponent";

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

    const dispatch = useDispatch();

    useEffect(() => {
        fetchSponsorshipPackagesAction(authToken, dispatch);
    }, [authToken]);


    return <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography>
                CHOOSE SP
            </Typography>
        </Grid>

        {(sponsorshipPackages as SponsorshipPackage[])
            .map(sponsorshipPackage => <Grid item xs={12} md={6} key={sponsorshipPackage.id}>
                <SponsorshipPackageCardComponent sponsorshipPackage={sponsorshipPackage}/>
            </Grid>)
        }
    </Grid>
}


export default ChooseCompanySponsorshipPackageComponent;