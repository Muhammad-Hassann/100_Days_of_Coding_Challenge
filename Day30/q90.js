"use strict";
// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
Object.defineProperty(exports, "__esModule", { value: true });
function checkNaN(value) {
    return isNaN(value);
}
console.log(checkNaN(23));
console.log(checkNaN("Hello"));
