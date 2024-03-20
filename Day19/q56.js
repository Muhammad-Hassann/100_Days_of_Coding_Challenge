// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixed = ["I", 67, "Loved", true, "Programming"];
var strOfMixed = mixed.filter(function (elem) { return typeof elem === 'string'; });
console.log(strOfMixed);
