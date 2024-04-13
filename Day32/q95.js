"use strict";
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
Object.defineProperty(exports, "__esModule", { value: true });
function greater10(arr) {
    return arr.filter(num => num > 10);
}
let numbers = [8, 19, 17, 3, 20, 4];
console.log(greater10(numbers));
