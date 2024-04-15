"use strict";
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
Object.defineProperty(exports, "__esModule", { value: true });
let student = {
    id: 1123,
    name: "Hassan",
    getStudent: function () {
        return `Name: ${this.name}, ID: ${this.id}`;
    }
};
console.log(student.getStudent());
