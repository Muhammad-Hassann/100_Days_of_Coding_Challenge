"use strict";
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getStudent() {
        console.log(`Student Id: ${this.id}, Student name: ${this.name}`);
    }
}
exports.Student = Student;
