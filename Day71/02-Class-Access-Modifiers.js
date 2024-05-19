"use strict";
// Access Modifiers
Object.defineProperty(exports, "__esModule", { value: true });
//public
class MyClassPublic {
    name;
    constructor(name) {
        this.name = name;
    }
}
const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property
// private
class MyClassPrivate {
    secret;
    constructor(secret) {
        this.secret = secret;
    }
    revealSecret() {
        console.log(this.secret); // Accessing the private property from within the class
    }
}
const instancePrivate = new MyClassPrivate("My secret");
// console.log(instancePrivate.secret); // This would result in an error because secret is private
instancePrivate.revealSecret(); // This is a valid way to access the private property
// protected
class Parent {
    familyName;
    constructor(name) {
        this.familyName = name;
    }
}
class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}
const parent = new Parent("Smith");
const child = new Child("Johnson");
// console.log(parent.familyName); // This would result in an error because familyName is protected
child.introduceFamily(); // This is a valid way to access the protected property
