// Access Modifiers

//public
class MyClassPublic {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property

// private
class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
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
    protected familyName: string

    constructor(name: string){
        this.familyName = name
    }
}

class Child extends Parent{
    introduceFamily () {
        console.log(`Our family name is ${this.familyName}`)
    }
}

const parent = new Parent("Smith");
const child = new Child("Johnson");

// console.log(parent.familyName); // This would result in an error because familyName is protected
child.introduceFamily(); // This is a valid way to access the protected property