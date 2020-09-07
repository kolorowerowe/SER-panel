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
    sponsorshipPackageId?: string;
}

export type ParamTypes = {
    userId?: string;
    companyId?: string;
    sponsorshipPackageId?: string;
}
