"use strict";
// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
Object.defineProperty(exports, "__esModule", { value: true });
function remainderAndQuotient(num1, num2) {
    return { "Quotient": num1 / num2, "Remainder": num1 % num2 };
}
console.log(remainderAndQuotient(5, 2));
