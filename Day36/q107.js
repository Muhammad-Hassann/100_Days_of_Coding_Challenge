// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisibleBy2and3(num) {
    return (num % 2 === 0 && num % 3 === 0) || num % 6 === 0;
}
console.log(isDivisibleBy2and3(9));
console.log(isDivisibleBy2and3(18));
