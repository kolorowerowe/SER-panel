import React from 'react';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const CompanyTileComponentContainer = (props) => {


    const {companyId} = props;


    return (
        <Typography>
            {companyId}
        </Typography>
    );
};

CompanyTileComponentContainer.propTypes = {
    companyId: PropTypes.string.isRequired
}

export default CompanyTileComponentContainer;
