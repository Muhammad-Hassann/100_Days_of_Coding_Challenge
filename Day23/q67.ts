// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

function mixedTypes(value1 : string, value2 : number){
    return  Number(value1) + value2
}

console.log(mixedTypes("10", 5))
