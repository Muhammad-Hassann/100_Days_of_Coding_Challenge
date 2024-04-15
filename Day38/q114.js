"use strict";
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
Object.defineProperty(exports, "__esModule", { value: true });
let students = new Map([
    ["qa12", "Hassan"],
    ["qa114", "Uzair"],
    ["qa233", "Mubashir"]
]);
students.forEach((name, id) => {
    console.log(`Id:${id}, Name: ${name}`);
});
