import i18n from "../i18n";

export const DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm:ss'
export const DATE_FORMAT = 'yyyy-MM-dd'
export const LONG_DATE_FORMAT = 'dd MMMM yyyy'

export const formatCountDown = (duration) => {

    let formatted = '';

    if (duration.asSeconds() <= 0) {
        return i18n.t('general:eventHaveStarted')
    }

    if (Math.floor(duration.asDays()) > 0) {
        formatted += Math.floor(duration.asDays()) + 'd ';
    }

    if (Math.floor(duration.asHours()) > 0) {
        const hours = duration.hours();
        formatted += (hours < 10 ? ('0' + hours) : hours) + 'h ';
    }

    if (Math.floor(duration.asMinutes()) > 0) {
        const minutes = duration.minutes();
        formatted += (minutes < 10 ? ('0' + minutes) : minutes) + 'm ';
    }

    const seconds = duration.seconds();
    formatted += (seconds < 10 ? ('0' + seconds) : seconds) + 's ';

    return formatted;
}