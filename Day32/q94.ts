// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

let words : string[] = ["Hello", "World", "Random Words", "Words Length"]

let lengthOfWords : number[] = words.map(word => word.length)

console.log(lengthOfWords)