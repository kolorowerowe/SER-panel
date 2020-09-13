import React from 'react';
import PropTypes from "prop-types";
import DefaultCard from "../../generic/displayData/DefaultCard";

const CompanyTileComponentContainer = (props) => {


    const {company} = props;

    const {
        id,
        name,
    } = company || {};


    return (
        <DefaultCard title={name}>
            {id}
        </DefaultCard>
    );
};

CompanyTileComponentContainer.propTypes = {
    company: PropTypes.shape({
        id: PropTypes.string.isRequired
    })
}

export default CompanyTileComponentContainer;
