// Question 146: Show an example of a callback function used to filter an array of numbers.

let numbers = [6, 31, 7, 28, 2, 10, 16]

let filteredNumbers = numbers.filter(function(val){
     return val > 10
})
 // Filter is a callback function, in which we declare a new function as it's argument 
console.log(filteredNumbers)