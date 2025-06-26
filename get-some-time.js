function gitDate(date, year) {
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
    s += year

    return s
}
function firstDayWeek(num, year) {
    //let add = 0
    const date = new Date(year, 0, 1)
    if (num == 1) {
        
        return gitDate(date, year)
    }
    
    //console.log(date);
    
    let day = date.getDay()
    //console.log("day", day);
    
    let weekToDays = ((num) * 7)
    //console.log(weekToDays);
    if (day === 0) day = 7;
    for (let i = day + 5; i > 0; i--) {
        //console.log(weekToDays);
        
        weekToDays -= 1
    }
    if (year < 1000) {
     weekToDays++   
    }
    // 
   // console.log(weekToDays);

    // if (day == 0) {
    //     weekToDays +=1
    // }
    //console.log(weekToDays);

    const newDate = new Date(year, 0, weekToDays)
    //console.log(newDate);

    return gitDate(newDate, year)
}

console.log(firstDayWeek(23, "0091"));

// Math.trunc