import React, {useEffect} from 'react';
import CompaniesComponentView from "./CompaniesComponentView";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompaniesAction} from "../../redux/actions/companiesActions";

const CompaniesComponentContainer = () => {

    const {companies, loading, error, errorResponse} = useSelector(state => state.companies);

    const {authToken} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCompaniesAction(authToken, dispatch);
    }, []);

    return (
        <CompaniesComponentView companies={companies}
                                loading={loading}
                                error={error}
                                errorResponse={errorResponse}
        />
    );
};


export default CompaniesComponentContainer;
