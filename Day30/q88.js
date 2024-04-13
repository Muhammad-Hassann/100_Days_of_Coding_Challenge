"use strict";
// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
Object.defineProperty(exports, "__esModule", { value: true });
function rounded(num) {
    return Math.round(num);
}
console.log(rounded(3.8));
console.log(rounded(4.3));
