"use strict";
// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
Object.defineProperty(exports, "__esModule", { value: true });
function dice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());
