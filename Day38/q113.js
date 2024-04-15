"use strict";
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
Object.defineProperty(exports, "__esModule", { value: true });
let countriesCapitals = new Map([
    ["Pakistan", "Islamabad"],
    ["Turkey", "Istanbul"],
    ["Canada", "Ottawa"]
]);
console.log(countriesCapitals.get("Canada"));
