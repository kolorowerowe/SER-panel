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
export type TranslationFields = {
    translations: Translation[];
    setName: (name: string, languageCode: string) => void;
    setDescription: (description: string, languageCode: string) => void;
}

export type Price = {
    currency: string;
    value: number;
}
export type PriceFields = {
    prices: Price[];
    setPriceValue: (newValue: string, currency: string) => void;
}

export type NewEquipmentBody = {
    translations: Translation[];
    maxCountPerCompany: number;
    prices: Price[];
};

export type Equipment = NewEquipmentBody & {
    id: string;
};

export type SPEquipment = {
    id: string;
    sponsorshipPackageId: string;
    count: number;
    equipment: Equipment;
}

export type SponsorshipPackage = {
    id: string;
    translations: Translation[];
    prices: Price[];
    standSize: number;
    currentCompanies: number;
    maxCompanies: number;
    isAvailable: boolean;
    spEquipmentList: SPEquipment[];
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

export type UserStatistics = {
    allUsersCount: number;
    roleOccurrenceList: {
        object: string;
        occurrences: number;
    }[]
}

export type CompanyStatistics = {
    allCompaniesCount: number;
}

export type SPStatistics = {
    allSPCount: number;
    percentageProgressesSP: {
        object: SponsorshipPackage;
        currentProgress: number;
        maxProgress: number;
    }[]
}

export type Statistics = {
    userStatistics: UserStatistics;
    companyStatistics: CompanyStatistics;
    sponsorshipPackageStatistics: SPStatistics;
}

export type ParamTypes = {
    userId?: string;
    companyId?: string;
    sponsorshipPackageId?: string;
}

export type ValidatedField = {
    value: string | number;
    error?: Error | null;
    handleBlur?: () => void;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    validate: () => Error | null;
    setValue: (value: string | number) => void;
}

export type SelectElement = {
    name: string;
    value: string|number;
}

export type ResponseMetaData = {
    loading: boolean;
    error?: object;
    errorResponse?: object;
}

export type OccurrenceInfo = {
    name: string;
    value: number;
}

export type DefaultBarChartProps = {
    data: OccurrenceInfo[]
}