"use strict";
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
Object.defineProperty(exports, "__esModule", { value: true });
function createObject(key, value) {
    let obj = {};
    obj[key] = value;
    return obj;
}
let font = createObject("font", "calibri");
console.log(font);
