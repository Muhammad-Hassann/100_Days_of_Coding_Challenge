// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function declaration(num) {
    return num * num;
}
var expression = function (num) {
    return num * num;
};
console.log(declaration(3));
console.log(expression(3));
