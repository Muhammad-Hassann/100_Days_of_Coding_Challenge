// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Original function
function area_of_rectangle(length, width) {
    return length * width;
}
// Refactored arrow function
var area_of_rectangle_arrow = function (length, width) { return length * width; };
console.log(area_of_rectangle_arrow(6, 9));
