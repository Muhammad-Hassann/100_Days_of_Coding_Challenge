"use strict";
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
Object.defineProperty(exports, "__esModule", { value: true });
const getProduct = (...number) => {
    return number.reduce((curr, accu) => curr * accu);
};
console.log(getProduct(7, 2, 5));
