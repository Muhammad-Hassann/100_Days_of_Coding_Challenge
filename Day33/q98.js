// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysLeftToNewyear() {
    var today = new Date;
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var oneDay = 1000 * 60 * 60 * 24;
    var difference = newYear.getTime() - today.getTime();
    var daysLeft = Math.ceil(difference / oneDay);
    return daysLeft;
}
console.log("".concat(daysLeftToNewyear(), " days left until New Year's Day!"));
