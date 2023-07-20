import {Info} from 'luxon';

export const parseDate = (date) => {
    const day = new Date(date).getDay(); 
    const luxonDay = (day + 6) % 7;
    
    return Info.weekdays('long')[luxonDay];
}

export const parseTemp = (temp) => {
    return Math.round(temp);
}