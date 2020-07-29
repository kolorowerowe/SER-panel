import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import DefaultCard from "../../generic/DefaultCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompanyDetailsAction} from "../../redux/actions/companiesActions";
import ProgressBar from "../../generic/ProgressBar";
import ErrorAlert from "../../generic/ErrorAlert";

const CompanyTileComponentContainer = (props) => {


    const {companyId} = props;

    const {company, loading, error, errorResponse} = useSelector(state => state.companies);
    const {
        id,
        name,
    } = company || {};
    const {authToken} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCompanyDetailsAction(companyId, authToken, dispatch);
    }, []);

    return (
        <DefaultCard title={name}>
            <ProgressBar loading={loading}/>
            <ErrorAlert error={error} errorResponse={errorResponse}/>
            {companyId}
        </DefaultCard>
    );
};

CompanyTileComponentContainer.propTypes = {
    companyId: PropTypes.string.isRequired
}

export default CompanyTileComponentContainer;
