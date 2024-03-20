// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var num = [5, 8, 4, 2, 7];
var num2 = num.map(function (elem) { return elem * 2; });
console.log(num2);
