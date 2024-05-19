"use strict";
// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
Object.defineProperty(exports, "__esModule", { value: true });
function hello() {
    setTimeout(() => {
        console.log("Hello World");
    }, 2000);
}
hello();
