"use strict";
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfArray(arr) {
    return arr.reduce((accu, current) => accu + current);
}
let numbers = [9, 6, 5, 8];
console.log(sumOfArray(numbers));
