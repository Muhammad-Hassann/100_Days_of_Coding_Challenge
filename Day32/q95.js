// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function greater10(arr) {
    return arr.filter(function (num) { return num > 10; });
}
var numbers = [8, 19, 17, 3, 20, 4];
console.log(greater10(numbers));
