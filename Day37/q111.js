"use strict";
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
Object.defineProperty(exports, "__esModule", { value: true });
function getAgeGroup(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(getAgeGroup(65));
console.log(getAgeGroup(15));
console.log(getAgeGroup(7));
