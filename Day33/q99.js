"use strict";
// Question 99: Generate a date object representing your next birthday and log it to the console.
Object.defineProperty(exports, "__esModule", { value: true });
function nextBirthday(day, month) {
    let today = new Date;
    let year = today.getFullYear();
    let birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday.toLocaleDateString();
}
console.log(nextBirthday(20, 8));
