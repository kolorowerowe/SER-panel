import i18n from "../i18n";

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
]

export const ALL_ROLES = [
    ...POSSIBLE_ROLES,
    {
        name: i18n.t('user:SYSTEM_ADMIN'),
        value: 'SYSTEM_ADMIN'
    }
]

export const ADMINISTRATOR_ROLES = ["SYSTEM_ADMIN"];
export const ORGANIZER_ROLES = ["SYSTEM_ADMIN", "ORGANIZER_EDITOR", "ORGANIZER_VIEWER"];
export const COMPANY_ROLES = ["COMPANY_EDITOR"];
export const EDIT_RIGHTS_ROLES = ["SYSTEM_ADMIN", "ORGANIZER_EDITOR", "COMPANY_EDITOR"];