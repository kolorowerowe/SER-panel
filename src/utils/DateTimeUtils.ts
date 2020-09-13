import i18n from "../i18n";
import moment, {Duration} from "moment";

export const DATE_FORMAT = 'yyyy-MM-dd'

export const formatDateWithBackwardPeriod = (date: string | undefined, format = 'LL'): string => {
    if (date === undefined) {
        return '-';
    }
    return moment(date).format(format) + " (" + moment(date).fromNow() + ")";
}

export const formatCountDown = (duration: Duration): string => {

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