"use strict";
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
// Original function
function area_of_rectangle(length, width) {
    return length * width;
}
// Refactored arrow function
const area_of_rectangle_arrow = (length, width) => length * width;
console.log(area_of_rectangle_arrow(6, 9));
