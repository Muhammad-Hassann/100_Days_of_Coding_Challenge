"use strict";
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
Object.defineProperty(exports, "__esModule", { value: true });
let profile = (function () {
    let user = { name: "Hassan", age: 18 };
    return user;
})();
console.log(profile);
