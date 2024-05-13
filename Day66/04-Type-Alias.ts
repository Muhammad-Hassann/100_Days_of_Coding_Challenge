// Type Alias

// Define a type alias for string
type MyString = string;

// Use the type alias for string
let myName: MyString = "Glitcher";

// Define a type alias for a union of string or number
type MyStringOrNumber = string | number;

// Use the type alias for the union type
let myValue: MyStringOrNumber = 10;

// Type alias with objects 
// Commonly use

type Person = {
    name: string;
    age: number;
    email?: string;
  };
  
  const person1: Person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
  };
  
  const person2: Person = {
    name: "Bob",
    age: 25,
  };
  
  console.log(person1);
  console.log(person2);
  
  