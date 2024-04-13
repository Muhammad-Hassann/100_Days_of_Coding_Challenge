"use strict";
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
Object.defineProperty(exports, "__esModule", { value: true });
let words = ["Hello", "World", "Random Words", "Words Length"];
let lengthOfWords = words.map(word => word.length);
console.log(lengthOfWords);
