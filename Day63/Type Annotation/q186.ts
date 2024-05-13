// Type Annotation

let myNumberExOne: number = 42;
let myStringExOne: string = "Hello, TypeScript";

console.log("My Number Is:", myNumberExOne);
console.log("My String Is:", myStringExOne);

// Another way to write this code:

let myNumberExTwo: number;
let myStringExTwo: string;

myNumberExTwo = 42;
myStringExTwo = "Hello, TypeScript";

console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);

// Dynamic type determination OR Type Inference

let greeting = "Hello, world!";
console.log(greeting);

// Any Type

let myVariable: any = 42;
myVariable = "Hello, TypeScript";
console.log(myVariable)