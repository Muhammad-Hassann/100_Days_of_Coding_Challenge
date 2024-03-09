// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let car = "Audi"
console.log(car=="Suzuki")
console.log(car=="Audi")

let bike = "Honda"
bike.toLowerCase()
console.log(bike=="honda")
console.log(bike=="Honda")

let age = 45
console.log(age == 18)
console.log(age >= 18)
console.log(age <= 18)

let num1 = 36
let num2 = 24
console.log(num1 >= 18 && num2 <= 18);
console.log(num1 >= 18 && num2 >= 18);
console.log(num1 <= 18 && num2 <= 18);

console.log(num1 >= 18 || num2 <= 18);
console.log(num1 >= 18 || num2 >= 18);
console.log(num1 <= 18 || num2 <= 18);

let arr = ["Mubashir", "Uzair", "Hassan", "Usama"]
console.log(arr.indexOf("Usama") !== -1)
console.log(arr.indexOf("Hammad") !== -1)


export{}
