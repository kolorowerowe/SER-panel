import {Moment} from "moment";

export type DeadlineF = {
    orderNumber: number;
    activity: string;
    deadlineDate: Moment;
}

export type DeadlineB = {
    orderNumber: number;
    activity: string;
    deadlineDate: string;
}

export type Translation = {
    languageCode: string;
    name: string;
    description: string;
}

export type Price = {
    currency: string;
    value: number;
}

export type NewEquipmentBody = {
    translations: Translation[];
    maxCountPerCompany: number;
    prices: Price[];
};

export type Equipment = NewEquipmentBody & {
    id: string;
};

export type SponsorshipPackage = {
    id: string;
    translations: Translation[];
    prices: Price[];
    standSize: number;
    isAvailable: boolean;
}

export type UserMiniData = {
    id: string;
    email: string;
    fullName: string;
}

export type CompanyDeadlineStatus = {
    orderNumber: number;
    activity: string;
    deadlineDate: string;
    isFinished: boolean;
}

export type CompanyResponse = {
    id: string;
    primaryUser: UserMiniData;
    name: string;
    contactPhone: string;
    taxId: string;
    companyCreatedDate: string;
    sponsorshipPackage?: SponsorshipPackage;
    companyDeadlineStatuses?: CompanyDeadlineStatus[];
}

export type ParamTypes = {
    userId?: string;
    companyId?: string;
    sponsorshipPackageId?: string;
}
