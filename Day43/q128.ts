// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

const getProduct = (...number : number[])=>{
     return number.reduce((curr, accu) => curr * accu)
}

console.log(getProduct(7, 2, 5))