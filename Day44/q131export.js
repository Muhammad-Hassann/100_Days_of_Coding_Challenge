"use strict";
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.getStudent = function () {
        console.log("Student Id: ".concat(this.id, ", Student name: ").concat(this.name));
    };
    return Student;
}());
exports.Student = Student;
