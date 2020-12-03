import React, {useEffect} from 'react';
import CompaniesComponentView from "./CompaniesComponentView";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompaniesAction} from "../../redux/actions/companiesActions";
import {useCompaniesData} from "../../data/CompaniesData";

const CompaniesComponentContainer = () => {

    const {companies, loading, error, errorResponse} = useSelector(state => state.companies);

    const {authToken} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const {handleCompaniesExport} = useCompaniesData();

    useEffect(() => {
        fetchCompaniesAction(authToken, dispatch);
    }, [authToken]);



    return (
        <CompaniesComponentView companies={companies}
                                loading={loading}
                                error={error}
                                errorResponse={errorResponse}
                                handleCompaniesExport={handleCompaniesExport}
        />
    );
};


export default CompaniesComponentContainer;
