"use strict";
// Question 135: Explain how you can format a JSON string with proper indentation for readability.
Object.defineProperty(exports, "__esModule", { value: true });
let myObj = {
    name: "Hssan",
    age: 18,
    study: "Software Engineering"
};
let jsonString = JSON.stringify(myObj, null, 2);
console.log(jsonString);
