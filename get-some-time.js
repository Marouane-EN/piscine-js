function gitDate(date) {
    let s = ""
    if (date.getDate() < 10) {
        s += "0" + date.getDate() + "-"
    } else {
        s += date.getDate() + "-"
    }
    if (1 + date.getMonth() < 10) {
        s += "0" + (1 + date.getMonth()) + "-"
    } else {
        s += (1 + date.getMonth()) + "-"
    }
    if (date.getFullYear() < 1000) {
        s += "0" + date.getFullYear()
    } else {
        s += date.getFullYear()
    }
    
    return s
}
function firstDayWeek(num, year) {
    //let add = 0
    // if (year < 1914) {
    //     return "01" + "-" + "01" + "-" + year
    // }
    const date = new Date(year, 0, 1)
    if (num == 1) {
        
        return gitDate(date)
    }
    //console.log(date);

    let day = date.getDay()
    //console.log("day", day);

    let weekToDays = ((num - 1) * 7)
    if (day > 1) {
        weekToDays -= day - 2
    } else if (day < 1) {
        weekToDays -= 7
    }
    //console.log(weekToDays);

    const newDate = new Date(year, 0, weekToDays)
    //console.log(newDate);

    return gitDate(newDate)
}

//console.log(firstDayWeek(52, "1000"));

// Math.trunc