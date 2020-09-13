import React from "react";
import {CompanyResponse} from "../../../declarations/types";

type Props = {
    company?: CompanyResponse;
}

const CompanySponsorshipPackageInfoComponent: React.FC<Props> = ({company}: Props) => {

    const {
        id
    } = company || {};

    return <div>
            some info
    </div>
}

export default CompanySponsorshipPackageInfoComponent;