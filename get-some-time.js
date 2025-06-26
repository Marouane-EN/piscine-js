function firstDayWeek(num, year) {
    //let add = 0
    if (year > 1914) {
        return "01" + "-" + "01" + year
    }
    const date = new Date(year, 0, 1)
    console.log(date);

    let day = date.getDay()
    if (day > 1) {
        day = 9 - day
    } else {
        day = 1
    }
    const weekToDays = (num - 1) * 7
    const newDate = new Date(year, 1, weekToDays + day)
    const s = newDate.getDate().toString() + "-" + newDate.getMonth().toString() + "-" + newDate.getFullYear().toString()
    return s
}

//console.log(firstDayWeek(1, "1000"));

// Math.trunc