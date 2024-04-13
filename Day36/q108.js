"use strict";
// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
Object.defineProperty(exports, "__esModule", { value: true });
function checkStringIdentity(str1, str2) {
    return (str1.toLowerCase() === str2.toLowerCase());
}
console.log(checkStringIdentity("Hello", "World"));
console.log(checkStringIdentity("Hello", "heLlo"));
