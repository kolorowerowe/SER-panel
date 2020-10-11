import React from 'react';
import DefaultCard from "../../../../generic/displayData/DefaultCard";
import {useTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";
import AddSponsorshipPackageDialog from "./AddSponsorshipPackageDialog";
import SponsorshipPackagesTable from "./SponsorshipPackagesTable";

const SponsorshipPackagesComponentView = (props) => {

    const {
        sponsorshipPackages,
        loading,
        error,
        errorResponse,

        setAddSponsorshipPackageDialogOpen
    } = props;

    const {t} = useTranslation();

    const NewSponsorshipPackageButton = () => (
        <Button
            variant="outlined"
            color="primary"
            onClick={() => {
                setAddSponsorshipPackageDialogOpen(true)
            }}
        >
            {t('sponsorshipPackage:addNewSponsorshipPackage')}
        </Button>
    );

    return (
        <DefaultCard title={t('sponsorshipPackage:allSponsorshipPackages')}
                     buttonComponent={<NewSponsorshipPackageButton/>}
                     divider
                     loading={loading}
                     error={error}
                     errorResponse={errorResponse}
        >
            <AddSponsorshipPackageDialog {...props}/>
            <SponsorshipPackagesTable sponsorshipPackages={sponsorshipPackages}/>
        </DefaultCard>
    );
};


export default SponsorshipPackagesComponentView;
