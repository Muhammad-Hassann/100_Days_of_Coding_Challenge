"use strict";
// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
Object.defineProperty(exports, "__esModule", { value: true });
let num = [5, 8, 4, 2, 7];
let num2 = num.map(elem => elem * 2);
console.log(num2);
