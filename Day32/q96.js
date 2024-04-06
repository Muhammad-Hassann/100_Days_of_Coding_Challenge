// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function sumOfArray(arr) {
    return arr.reduce(function (accu, current) { return accu + current; });
}
var numbers = [9, 6, 5, 8];
console.log(sumOfArray(numbers));
