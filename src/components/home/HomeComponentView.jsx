import React from 'react';
import DefaultCard from "../../generic/DefaultCard";
import Grid from "@material-ui/core/Grid";
import CompanyTileComponentContainer from "./CompanyTileComponentContainer";
import Typography from "@material-ui/core/Typography";
import RegisterCompanyComponentContainer from "./RegisterCompanyComponentContainer";

const HomeComponentView = (props) => {

    const {
        isOrganizer,
        isCompany,
        activeUser: {
            user: {
                fullName,
                role,
            } = {},
            loading,
            error,
            errorResponse
        } = {},
        companies: {
            companies
        } = {}
    } = props

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <DefaultCard title={`Hello, ${fullName}!`}>
                </DefaultCard>
            </Grid>

            {isCompany && !!companies && (companies.length > 0 ?
                companies.map((company) =>
                    <Grid item xs={12} key={company.id}>
                        <CompanyTileComponentContainer company={company}/>
                    </Grid>) :
                <Grid item xs={12}>
                    <RegisterCompanyComponentContainer/>
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
