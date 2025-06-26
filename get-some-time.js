function firstDayWeek(num, year) {
    let add = 0
    if (year > 1914) {
        add+=1
    }
    const date = new Date(year, 0, 1+add)
    console.log(date);

    let day = date.getDay()
    if (day > 1) {
        day = 9 - day
    } else {
        day = 1
    }
    const weekToDays = (num - 1) * 7
    const newDate = new Date(year, 1, weekToDays + day)
    const s = newDate.getFullYear().toString() + "-" + newDate.getMonth().toString() + "-" + newDate.getDate().toString()
    return s
}

//console.log(firstDayWeek(1, "1000"));

// Math.trunc