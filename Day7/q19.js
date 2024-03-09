"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
var persons = ["Hammad", "Waqas", "Owais"];
var invitation_message = ", You are invited to dinner today";
console.log("Hey we have more space to invite more people!");
persons.unshift("Dawood");
persons.splice(2, 0, "Araiz");
persons.push("Ibrahim");
persons.forEach(function (element) {
    console.log(element + invitation_message);
});
console.log(persons.length);
