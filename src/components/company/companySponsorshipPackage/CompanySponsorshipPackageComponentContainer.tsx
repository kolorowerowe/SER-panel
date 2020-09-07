import React from 'react';
import {Company} from '../../../declarations/types';

type Props = {
    companyId: string;
    company?: Company;
}

const CompanySponsorshipPackageComponentContainer: React.FC<Props> = ({company, companyId}: Props) => {
    return (
        <div>
            //TODO: 07/09/20 pakiet sponsorski
        </div>
    );
};


export default CompanySponsorshipPackageComponentContainer;
