"use strict";
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["Apple", "Banana", "Graps", "Papaya"];
let index = fruits.indexOf("Banana");
if (index !== -1) {
    fruits[index] = "Mango";
}
console.log(fruits);
