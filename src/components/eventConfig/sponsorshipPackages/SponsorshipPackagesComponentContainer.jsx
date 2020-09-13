import React, {useEffect, useState} from 'react';
import SponsorshipPackagesComponentView from "./SponsorshipPackagesComponentView";
import {useDispatch, useSelector} from "react-redux";
import {
    addSponsorshipPackageAction,
    fetchSponsorshipPackagesAction
} from "../../../redux/actions/sponsorshipPackagesActions";
import {useSnackbar} from "../../../utils/useSnackbar";

const SponsorshipPackagesComponentContainer = () => {

    const {sponsorshipPackages, loading, error, errorResponse} = useSelector(state => state.sponsorshipPackages);

    const {authToken} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const snackbar = useSnackbar();

    useEffect(() => {
        fetchSponsorshipPackagesAction(authToken, dispatch);
    }, [authToken, ]);

    const handleAddSponsorshipPackageSubmit = (userBody) => {
        addSponsorshipPackageAction(userBody, authToken, dispatch, snackbar);
        setAddSponsorshipPackageDialogOpen(false);
    }

    const [addSponsorshipPackageDialogOpen, setAddSponsorshipPackageDialogOpen] = useState(false);

    return (
        <SponsorshipPackagesComponentView sponsorshipPackages={sponsorshipPackages}
                                          loading={loading}
                                          error={error}
                                          errorResponse={errorResponse}

                                          addSponsorshipPackageDialogOpen={addSponsorshipPackageDialogOpen}
                                          setAddSponsorshipPackageDialogOpen={setAddSponsorshipPackageDialogOpen}
                                          handleAddSponsorshipPackageSubmit={handleAddSponsorshipPackageSubmit}
        />
    );
};


export default SponsorshipPackagesComponentContainer;
