"use strict";
// Question 92: Write a function to remove the last element from an array and return the removed element.
Object.defineProperty(exports, "__esModule", { value: true });
function removeElement(arr) {
    return arr.pop();
}
let fruits = ["Apple", "Mango", "Graps"];
console.log(removeElement(fruits));
console.log(fruits);
