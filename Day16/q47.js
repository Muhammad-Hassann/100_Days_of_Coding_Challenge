"use strict";
// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables
Object.defineProperty(exports, "__esModule", { value: true });
let laptops = [
    { make: "Dell", model: "Latitude E6430", year: 2016 },
    { make: "HP", model: "Pavilion", year: 2022 },
    { make: "Lenevo", model: "Thinkpad", year: 2020 }
];
let [firstLaptop, secondLaptop] = laptops;
console.log(firstLaptop);
console.log(secondLaptop);
