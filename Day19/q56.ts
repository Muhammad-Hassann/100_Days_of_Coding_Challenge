// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixed = ["I", 67, "Loved", true, "Programming"]

let strOfMixed = mixed.filter(elem => typeof elem === 'string')

console.log(strOfMixed)