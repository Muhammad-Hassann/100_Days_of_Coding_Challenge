"use strict";
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
Object.defineProperty(exports, "__esModule", { value: true });
function checkJavaScript(sentence) {
    return sentence.includes("JavaScript");
}
console.log(checkJavaScript("JavaScript is a programming language"));
