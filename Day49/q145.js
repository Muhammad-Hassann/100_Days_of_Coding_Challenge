"use strict";
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
Object.defineProperty(exports, "__esModule", { value: true });
function executeCallback(callback, num1, num2) {
    callback(num1, num2);
}
function add(a, b) {
    console.log(a + b);
}
executeCallback(add, 2, 6);
