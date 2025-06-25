const addWeek = (date) => {
    let day = date.getUTCDate()
    day = day % 14
    const arr = ["secondSunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday"]
    return arr[day];
}

const timeTravel = (timeObject) => {
    timeObject.date.setHours(timeObject.hour, timeObject.minute, timeObject.second)
    return timeObject.date


}
