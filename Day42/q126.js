"use strict";
// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
Object.defineProperty(exports, "__esModule", { value: true });
let myObj = {
    name: "Hassan",
    getName: function () {
        console.log(this.name);
        const insideFunction = () => {
            console.log(this.name);
        }; // It is accessble because arrow function, It isn't accessble with normal functions
        insideFunction();
    }
};
myObj.getName();
