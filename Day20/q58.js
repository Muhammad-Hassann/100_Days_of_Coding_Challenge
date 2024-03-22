// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function scoresAverage() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (current, acum) { return current + acum; }) / arr.length;
}
console.log(scoresAverage(65, 76, 89, 45));
