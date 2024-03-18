// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Original function
function area_of_rectangle(length : number, width : number){
     return length * width
}

// Refactored arrow function
const area_of_rectangle_arrow = (length : number, width : number)=> length * width

console.log(area_of_rectangle_arrow(6, 9))