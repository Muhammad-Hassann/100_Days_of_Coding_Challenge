"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.hello = void 0;
function hello() {
    console.log("Hello World!");
}
exports.hello = hello;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
// You can export multiple named export
function product(a, b) {
    return a * b;
}
exports.default = product;
// Only one one export can be declare as default
