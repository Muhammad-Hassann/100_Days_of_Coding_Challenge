"use strict";
// Extending and Implementing:
Object.defineProperty(exports, "__esModule", { value: true });
class Labrador {
    type = "dog";
    bark() {
        console.log("Woof!");
    }
}
const labrador = {
    type: "monkey",
    bark() {
        console.log("Woof!");
    },
};
const myCar = {
    brand: "Toyota",
    model: "Camry",
};
//   Type Alias: Does not support declaration merging.
