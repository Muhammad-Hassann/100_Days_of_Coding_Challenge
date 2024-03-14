"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
var magiciansName = ["David Copperfield", "Criss Angel", "Dynamo"];
function show_magicians(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        console.log(i);
    }
}
function make_great(arr) {
    var updatedArr = arr.slice();
    for (var i = 0; i < updatedArr.length; i++) {
        updatedArr[i] = updatedArr[i] + "The Great";
    }
    return updatedArr;
}
var greatMagicians = make_great(magiciansName);
show_magicians(greatMagicians);
