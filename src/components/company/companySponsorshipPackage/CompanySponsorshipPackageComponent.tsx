import React, {useMemo} from 'react';
import {CompanyResponse} from '../../../declarations/types';
import CompanySponsorshipPackageInfoComponent from "./CompanySponsorshipPackageInfoComponent";
import ChooseCompanySponsorshipPackageComponent
    from "./chooseSponsorshipPackage/ChooseCompanySponsorshipPackageComponent";

type Props = {
    companyId: string;
    company?: CompanyResponse;
    loading: boolean;
    error?: object;
}

const CompanySponsorshipPackageComponent: React.FC<Props> = ({company, loading, error}: Props) => {

    const {
        sponsorshipPackage
    } = company || {};

    const companyIsWithoutSponsorshipPackage = useMemo(() => {
        return (!loading && !error && !sponsorshipPackage);
    }, [sponsorshipPackage, loading, error]);

    return (companyIsWithoutSponsorshipPackage ?
            <ChooseCompanySponsorshipPackageComponent company={company}/>
            :
            <CompanySponsorshipPackageInfoComponent company={company}/>
    );
};


export default CompanySponsorshipPackageComponent;
