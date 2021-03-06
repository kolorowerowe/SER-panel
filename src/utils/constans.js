import i18n from "../i18n";

export const EVENT_DATE_TIME = '2021-03-10T10:00'

export const POSSIBLE_TRANSLATIONS = [
    {
        name: 'Polski',
        value: 'pl'
    },
    {
        name: 'English',
        value: 'en'
    }
];

export const DEADLINES = [
    'FILL_COMPANY_DATA',
    'CHOOSE_SPONSORSHIP_PACKAGE',
    'CHOOSE_ADDITIONAL_EQUIPMENT',
    'FILL_CATALOGUE_INFORMATION',
    'SIGN_THE_CONTRACT'
]

export const POSSIBLE_CURRENCIES = [
    {
        name: 'PLN',
        value: 'PLN'
    },
    {
        name: 'EUR',
        value: 'EUR'
    }
];

export const POSSIBLE_ROLES = [
    {
        name: i18n.t('user:ORGANIZER_EDITOR'),
        value: 'ORGANIZER_EDITOR'
    },
    {
        name: i18n.t('user:ORGANIZER_VIEWER'),
        value: 'ORGANIZER_VIEWER'
    },
    {
        name: i18n.t('user:COMPANY_EDITOR'),
        value: 'COMPANY_EDITOR'
    }
];

export const ALL_ROLES = [
    ...POSSIBLE_ROLES,
    {
        name: i18n.t('user:SYSTEM_ADMIN'),
        value: 'SYSTEM_ADMIN'
    }
];

export const ADMINISTRATOR_ROLES = ["SYSTEM_ADMIN"];
export const ORGANIZER_ROLES = ["SYSTEM_ADMIN", "ORGANIZER_EDITOR", "ORGANIZER_VIEWER"];
export const COMPANY_ROLES = ["COMPANY_EDITOR"];
export const EDIT_RIGHTS_ROLES = ["SYSTEM_ADMIN", "ORGANIZER_EDITOR", "COMPANY_EDITOR"];