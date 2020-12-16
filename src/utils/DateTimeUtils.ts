import moment, {Duration} from "moment";
import {useEffect, useState} from "react";

export const DATE_FORMAT = 'yyyy-MM-dd'

export const formatDateWithBackwardPeriod = (date: string | undefined, format = 'LL'): string => {
    if (date === undefined) {
        return '-';
    }
    return moment(date).format(format) + " (" + moment(date).fromNow() + ")";
}


export const useCountdownHook = (dateTo: string) => {
    const eventDateTime = moment(dateTo).valueOf();

    const [timeLeft, setTimeLeft] = useState<Duration>(moment.duration(1, 'millisecond'));

    const updateTimeLeft = () => {
        const currentTime = moment().valueOf();
        const diffTimeSeconds = eventDateTime - currentTime;
        const duration = moment.duration(diffTimeSeconds, 'milliseconds');
        if (duration.asMilliseconds() > 0) {
            setTimeLeft(duration);
        }
    }

    useEffect(() => {
        if (!!dateTo) {
            setInterval(updateTimeLeft, 1000)
        }
    }, [dateTo]);

    return {
        timeLeft,
    };
}