import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import Grid from "@material-ui/core/Grid";
import CompanyTileComponentContainer from "./CompanyTileComponentContainer";
import Typography from "@material-ui/core/Typography";

const HomeComponentView = (props) => {

    const {
        error,
        errorResponse,
        loading,
        isOrganizer,
        isCompany,
        user: {
            fullName,
            role,
            companyAccessList
        } = {}
    } = props

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <DefaultCard title={`Hello, ${fullName}!`}>
                </DefaultCard>
            </Grid>

            {isCompany && !!companyAccessList && (companyAccessList.length > 0 ?
                companyAccessList.map(({companyId}) =>
                    <Grid item xs={12} key={companyId}>
                        <CompanyTileComponentContainer companyId={companyId}/>
                    </Grid>) :
                <Grid item xs={12}>
                    <Typography>
                        Nie masz jeszcze firmy, zarejestruj ją
                    </Typography>
                </Grid>)
            }

            {isOrganizer && <Typography>
                Jesteś adminem
            </Typography>}
        </Grid>

    );
};

HomeComponentView.propTypes = {};

export default HomeComponentView;
