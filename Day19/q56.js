"use strict";
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
Object.defineProperty(exports, "__esModule", { value: true });
let mixed = ["I", 67, "Loved", true, "Programming"];
let strOfMixed = mixed.filter(elem => typeof elem === 'string');
console.log(strOfMixed);
