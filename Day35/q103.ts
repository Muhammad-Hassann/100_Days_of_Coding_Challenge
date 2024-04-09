// Question 103: Write a function that returns a random boolean value, true or false.

function randomBoolean(): boolean{
    return Math.random() > 0.5  // Return true when randomly generated number is 1, else false
}

console.log(randomBoolean())