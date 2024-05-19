"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function returnType(val) {
    return val;
}
const numValue = returnType(100);
const strValue = returnType("Elzero");
const boolValue = returnType(true);
const arrValue = returnType([1, 2, 3, 4]);
console.log(`Number Value: ${numValue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);
