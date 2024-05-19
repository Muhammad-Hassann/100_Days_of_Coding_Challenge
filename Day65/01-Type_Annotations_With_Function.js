"use strict";
// Type annotation with functions
Object.defineProperty(exports, "__esModule", { value: true });
// Function to calculate the area of a rectangle
function calculateRectangleArea(long, width) {
    return long * width;
}
// Calling the function with valid arguments
const long = 5;
const width = 3;
const area = calculateRectangleArea(long, width);
console.log(`The area of the rectangle is: ${area}`);
