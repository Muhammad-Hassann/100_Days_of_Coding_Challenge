"use strict";
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
Object.defineProperty(exports, "__esModule", { value: true });
function stringToNumber(str) {
    return parseFloat(str);
}
console.log(stringToNumber("12.8"));
console.log(stringToNumber("24"));
