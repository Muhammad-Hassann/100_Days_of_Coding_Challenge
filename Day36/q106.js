"use strict";
// Question 106: Determine if a given year is a leap year using comparison operators.
Object.defineProperty(exports, "__esModule", { value: true });
function checkLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(checkLeapYear(2019));
console.log(checkLeapYear(2024));
