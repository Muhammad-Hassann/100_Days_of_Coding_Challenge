"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function optionalGreetings(name, age) {
    if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
optionalGreetings("Hassan");
optionalGreetings("Hassan", 16);
function greetDefault(name, age = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30);
