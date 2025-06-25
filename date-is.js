function isValid(date) {
    if (typeof date == 'string') {
        return false
    }
    return new Date(date) == 'Invalid Date' ? false : true
}
function isAfter(date1, date2) {
    return date1 - date2 > 0 ? true : false
}

function isBefore(date1, date2) {
    return date1 - date2 < 0 ? true : false
}

function isFuture(date1) {
    if (!isValid(date1)) return false
    const date2 = new Date()
    return date1 - date2 > 0 ? true : false
}

function isPast(date1) {
    if (!isValid(date1)) return false
    const date2 = new Date()
    return date1 - date2 < 0 ? true : false
}

