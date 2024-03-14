"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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
        updatedArr[i] = updatedArr[i] + " the Great";
    }
    return updatedArr;
}
var copyMagicians = ["David Copperfield", "Criss Angel", "Dynamo"];
var greatMagicians = make_great(magiciansName);
show_magicians(copyMagicians);
show_magicians(greatMagicians);
