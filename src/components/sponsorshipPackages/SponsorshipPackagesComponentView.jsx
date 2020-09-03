import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddSponsorshipPackageDialog from "./AddSponsorshipPackageDialog";
import Divider from "@material-ui/core/Divider";
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
    const classes = useStyles();

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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AddSponsorshipPackageDialog {...props}/>

                <DefaultCard title={t('sponsorshipPackage:allSponsorshipPackages')}
                             buttonComponent={<NewSponsorshipPackageButton/>}
                >
                    <Divider className={classes.divider}/>
                    <SponsorshipPackagesTable sponsorshipPackages={sponsorshipPackages}/>
                </DefaultCard>
            </Grid>
        </Grid>

    );
};


export default SponsorshipPackagesComponentView;

const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: 20,
        marginBottom: 20
    }
}));
