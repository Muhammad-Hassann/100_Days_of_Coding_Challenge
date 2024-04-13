"use strict";
// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
Object.defineProperty(exports, "__esModule", { value: true });
function upperLowerCase(text) {
    let upper = text.toUpperCase();
    let lower = text.toLowerCase();
    console.log("UpperCase:", upper, "LowerCase:", lower);
}
upperLowerCase("hAsSaN");
