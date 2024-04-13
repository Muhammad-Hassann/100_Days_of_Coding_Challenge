"use strict";
// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
Object.defineProperty(exports, "__esModule", { value: true });
function daysLeftToNewyear() {
    const today = new Date;
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const oneDay = 1000 * 60 * 60 * 24;
    const difference = newYear.getTime() - today.getTime();
    const daysLeft = Math.ceil(difference / oneDay);
    return daysLeft;
}
console.log(`${daysLeftToNewyear()} days left until New Year's Day!`);
