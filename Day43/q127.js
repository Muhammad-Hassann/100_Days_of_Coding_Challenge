"use strict";
// Question 127: Convert a traditional function expression to an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
function addTraditionalFunction(num1, num2) {
    return num1 + num2;
}
const addArrowFunction = (num1, num2) => {
    return num1 + num2;
};
console.log(addTraditionalFunction(6, 2));
console.log(addArrowFunction(6, 2));
