function optionalGreetings(name, age) {
    if (age !== undefined) {
        console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
optionalGreetings("Hassan");
optionalGreetings("Hassan", 16);
function greetDefault(name, age) {
    if (age === void 0) { age = 25; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30);
