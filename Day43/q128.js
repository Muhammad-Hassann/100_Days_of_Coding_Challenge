// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
var getProduct = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (curr, accu) { return curr * accu; });
};
console.log(getProduct(7, 2, 5));
