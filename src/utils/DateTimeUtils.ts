import i18n from "../i18n";
import moment, {Duration} from "moment";
import {useState} from "react";

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

export const useCountdownHook = (dateTo: string) => {
    const eventDateTime = moment(dateTo).valueOf();

    const [timeLeft, setTimeLeft] = useState<Duration>(moment.duration(0, 'millisecond'));

    const updateTimeLeft = () => {
        const currentTime = moment().valueOf();
        const diffTimeSeconds = eventDateTime - currentTime;
        const duration = moment.duration(diffTimeSeconds, 'milliseconds');
        if (duration.asMilliseconds() > 0) {
            setTimeLeft(duration);
        }
    }

    const interval = setInterval(updateTimeLeft, 1000);

    const stop = () => {
        clearInterval(interval)
    }

    return {
        timeLeft,
        stop
    };
}