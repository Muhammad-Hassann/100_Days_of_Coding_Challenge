"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ["Admin", "Ayaz", "Salman", "Aijaz", "Ali"];
if (usernames != null) {
    console.log("List is not empty");
}
usernames.splice(0, usernames.length);
console.log(usernames);
if (usernames.length == 0) {
    console.log("We need to find some users!");
}
