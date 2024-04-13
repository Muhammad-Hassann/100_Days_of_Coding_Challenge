"use strict";
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
Object.defineProperty(exports, "__esModule", { value: true });
function roundDecimal(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(roundDecimal(2.5, 1.7));
