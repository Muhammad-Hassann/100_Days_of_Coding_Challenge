// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function currentDate() {
    var date = new Date;
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    // console.log(date.getDate())
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(currentDate());
