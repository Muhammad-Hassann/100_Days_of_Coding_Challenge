// Nullable Type

let username: string | null = "Glicher"; // The variable can hold a string or null
let age: number | null = null; // The variable can hold a number or null

// Nullable types with function parameters

function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null);     // Output: Hello, Guest!