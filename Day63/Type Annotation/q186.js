"use strict";
// Type Annotation
Object.defineProperty(exports, "__esModule", { value: true });
let myNumberExOne = 42;
let myStringExOne = "Hello, TypeScript";
console.log("My Number Is:", myNumberExOne);
console.log("My String Is:", myStringExOne);
// Another way to write this code:
let myNumberExTwo;
let myStringExTwo;
myNumberExTwo = 42;
myStringExTwo = "Hello, TypeScript";
console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);
// Dynamic type determination OR Type Inference
let greeting = "Hello, world!";
console.log(greeting);
// Any Type
let myVariable = 42;
myVariable = "Hello, TypeScript";
console.log(myVariable);
