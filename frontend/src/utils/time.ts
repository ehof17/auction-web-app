import arrayRange from './array.ts';

function monthToDays(month, isLeap) {
    if (month in [4,6,9,11]) {
        return 30;
    } else if (month == 2 && isLeap) {
        return 29;
    } else if (month == 2 && !isLeap) {
        return 28;
    } else {
        return 31;
    }
}

function daysFromBeginningOfYear(date: Date) {
    return date.getUTCDate() + arrayRange(1, date.getUTCMonth()-1, 1).reduce((dayTotal, currentMonth) => {
        return dayTotal + monthToDays(currentMonth, date.getUTCFullYear() % 4 == 0)
    }, 0);
}

function daysToEndOfYear(date: Date) {
    return (monthToDays(date.getUTCMonth(), date.getUTCFullYear() % 4 == 0) - date.getUTCDate()) + 
        arrayRange(date.getUTCMonth()+1, 12, 1).reduce((dayTotal, currentMonth) => {
            return dayTotal + monthToDays(currentMonth, date.getUTCFullYear() % 4 == 0)
        }, 0);
}

function dayDiff(date1: Date, date2: Date) {
    if (date1.getUTCFullYear() == date2.getUTCFullYear()) {
        return daysFromBeginningOfYear(date2) - daysFromBeginningOfYear(date1);
    } 

    let numDays = 0;
    let yearCounter = date1.getUTCFullYear() + 1;
    const finalYear = date2.getUTCFullYear();

    while(yearCounter < finalYear) {
        if (yearCounter % 4 == 0) {
            numDays += 366;
        } else {
            numDays += 365;
        }
        yearCounter += 1;
    }
    
    return daysToEndOfYear(date1) + numDays + daysFromBeginningOfYear(date2);
    
}

function timeDiff(date1: Date, date2: Date) {
    
    let days = dayDiff(date1, date2);
    let seconds = date2.getUTCSeconds() - date1.getUTCSeconds();
    let minutes = date2.getUTCMinutes() - date1.getUTCMinutes();
    let hours = date2.getUTCHours() - date1.getUTCHours();

    if (seconds < 0) {
        seconds += 60;
        minutes -= 1;
    }
    if (minutes < 0) {
        minutes += 60;
        hours -= 1;
    }
    if (hours < 0) {
        hours += 24;
        days -= 1;
    }

    return [days, hours, minutes, seconds];
}

export default timeDiff;