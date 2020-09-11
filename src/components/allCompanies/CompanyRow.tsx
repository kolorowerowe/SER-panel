import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {useTranslation} from "react-i18next";
import {CompanyDeadlineStatus, CompanyResponse} from "../../declarations/types";
import StatusIconComponent from "../../generic/StatusIconComponent";
import {Checkbox} from "@material-ui/core";


type Props = {
    company: CompanyResponse;
    handleOpenCompany: ((id: string) => void);
}


const CompanyRow: React.FC<Props> = ({company, handleOpenCompany}: Props) => {

    const {
        id,
        name,
        primaryUser: {
            fullName = ''
        } = {},
        sponsorshipPackageId,
        companyDeadlineStatuses = []
    } = company;

    const {t} = useTranslation();

    type StatusesProps = {
        companyDeadlineStatuses: CompanyDeadlineStatus[];
    }
    const Statuses: React.FC<StatusesProps> = ({companyDeadlineStatuses}: StatusesProps) => {
        return <div>
            {
                companyDeadlineStatuses.map(status => <Checkbox key={status.orderNumber}
                                                                checked={status.isFinished}
                                                                onChange={() => null}
                                                                color="primary"
                                                                disabled
                />)
            }
        </div>
    }

    return (
        <TableRow hover onClick={(): void => handleOpenCompany(id)}>
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell align="center">
                {fullName}
            </TableCell>
            <TableCell align="center">
                {sponsorshipPackageId === undefined ?
                    <StatusIconComponent status={'error'} label={t('sponsorshipPackage:notChosenYet')}/>
                    : sponsorshipPackageId
                }
            </TableCell>
            <TableCell align="center">
                <Statuses companyDeadlineStatuses={companyDeadlineStatuses}/>
            </TableCell>
        </TableRow>
    );
};

export default CompanyRow;
