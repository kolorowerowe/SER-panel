import React, {useMemo} from 'react';
import {CompanyResponse} from '../../../declarations/types';

type Props = {
    companyId: string;
    company?: CompanyResponse;
    loading: boolean;
    error?: object;
}

const CompanySponsorshipPackageComponentContainer: React.FC<Props> = ({company, loading, error}: Props) => {

    const {
        name,
        companyCreatedDate,
        sponsorshipPackage
    } = company || {};

    const isNotDefined = useMemo(() => {
        return (!loading && !error && !sponsorshipPackage);
    }, [company]);


    return (
        <div>
            {isNotDefined ? "Nie ma " : "Zrob"}

        </div>
    );
};


export default CompanySponsorshipPackageComponentContainer;
