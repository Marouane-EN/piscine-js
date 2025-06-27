const isFriday = (date) => date.getDay() == 5
const isWeekend = (date) => date.getDay() == 0 || date.getDay() == 6
const isLeapYear = (date) => (date.getFullYear() % 4 == 0 && date.getFullYear() % 100 != 0) || date.getFullYear() % 400 == 0
const isLastDayOfMonth = (date) => {
    const day = new Date(date)
    day.setDate(date.getDate() + 1)
    return day.getMonth() != date.getMonth()
}
