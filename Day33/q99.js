// Question 99: Generate a date object representing your next birthday and log it to the console.
function nextBirthday(day, month) {
    var today = new Date;
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday.toLocaleDateString();
}
console.log(nextBirthday(20, 8));
