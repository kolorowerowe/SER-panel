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
export type SponsorshipPackage = {
    id: string;
    translations: Translation[];
    prices: Price[];
    standSize: number;
    isAvailable: boolean;
}

export type Company = {
    id: string;
    primaryUserId: string;
    name: string;
    contactPhone: string;
    taxId: string;
    companyCreatedDate: string;
    sponsorshipPackageId?: string;
}

export type ParamTypes = {
    userId?: string;
    companyId?: string;
    sponsorshipPackageId?: string;
}
