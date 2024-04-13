"use strict";
// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    make: "Honda",
    model: "Civic",
    year: 2022
};
console.log(car.model);
