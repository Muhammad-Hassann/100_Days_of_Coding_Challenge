"use strict";
// Arrow Function with Generics
Object.defineProperty(exports, "__esModule", { value: true });
let returnArrow = (val) => val;
console.log(returnArrow("Hello")); // Returns: "Hello" (string)
console.log(returnArrow(78)); // Returns: 78 (number)
// Generic Function `testType`
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType(100));
// Returns: "The Value Is 100 And Type Is number"
console.log(testType("Elzero"));
// Returns: "The Value Is Elzero And Type Is string"
// Generic Function `multipleTypes`
function multipleTypes(val1, val2) {
    return `The First Value Is ${val1} And Second Value ${val2}`;
}
console.log(multipleTypes("Osama", 100));
// Returns: "The First Value Is Osama And Second Value 100"
console.log(multipleTypes("Elzero", true));
// Returns: "The First Value Is Elzero And Second Value true"
