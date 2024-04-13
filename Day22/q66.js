"use strict";
// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
Object.defineProperty(exports, "__esModule", { value: true });
function checkBothTrue(value1, value2) {
    return value1 && value2;
}
console.log(checkBothTrue(true, true));
console.log(checkBothTrue(true, false));
