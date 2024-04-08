// Question 99: Generate a date object representing your next birthday and log it to the console.

function nextBirthday(day : number, month : number){
    let today = new Date
    let year = today.getFullYear()
    let birthday = new Date(year, month -1, day)

    if(birthday < today){
        birthday.setFullYear(year + 1)
    }

    return birthday.toLocaleDateString()
}

console.log(nextBirthday(20, 8))