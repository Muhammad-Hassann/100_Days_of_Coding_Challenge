"use strict";
// Question 137: Implement a try-catch block to handle potential errors in a block of code.
Object.defineProperty(exports, "__esModule", { value: true });
try {
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error.message);
}
