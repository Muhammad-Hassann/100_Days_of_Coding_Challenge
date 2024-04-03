// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

function rounded(num: number){
    return Math.round(num)
}

console.log(rounded(3.8))
console.log(rounded(4.3))