const addWeek = (date) => {

    let today = new Date("0001-01-01");
    // console.log(typeof today);

    // let day = date.getUTCDate()
    let day = (date - today) / 1000 / 3600 / 24;
    // console.log(day);

    day = day % 14
    // console.log(day);

    const arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"]
    return arr[day];
}

const timeTravel = (timeObject) => {
    timeObject.date.setHours(timeObject.hour, timeObject.minute, timeObject.second)
    return timeObject.date


}

// console.log(addWeek(new Date('0001-01-14')));

// console.log(addWeek(new Date('2025-08-11')));
