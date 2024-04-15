"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
function getHello() {
    console.log("Hello World!");
}
exports.default = getHello;
