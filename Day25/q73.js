// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
function declareVariable() {
    var num = 8;
    console.log("Initial Value ".concat(num));
    num = 6;
    console.log("Updated Value ".concat(num));
}
declareVariable();
