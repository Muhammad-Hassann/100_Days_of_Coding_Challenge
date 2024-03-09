"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var persons = ["Hammad", "Waqas", "Owais"];
var invitation_message = ", You are invited to dinner today";
// persons.forEach(element => {
//     console.log(element + invitation_message)
// });
// let not_attend = persons[1]
// console.log(not_attend + " removed")
// persons.splice(1, 1, "Mubasir")
// persons.forEach(element => {
//     console.log(element + invitation_message)
// });
console.log("Hey we have more space to invite more people");
persons.push("Ibrahim");
persons.splice(2, 0, "Araiz");
persons.unshift("Dawood");
persons.forEach(function (element) {
    console.log(element + invitation_message);
});
