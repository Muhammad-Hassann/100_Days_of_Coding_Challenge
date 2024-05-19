"use strict";
// Question 149: Explain the concept of the event loop in JavaScript with an example.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Sart");
setTimeout(() => {
    console.log("CallBck qeue is Executed");
}, 0);
console.log("End");
