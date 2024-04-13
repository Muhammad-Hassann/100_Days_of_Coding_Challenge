"use strict";
// . Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansName = ["David Copperfield", "Criss Angel", "Dynamo"];
function show_magicians(arr) {
    for (let i of arr) {
        console.log(i);
    }
}
show_magicians(magiciansName);
