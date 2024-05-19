// Arrow Function with Generics

let returnArrow = <T>(val : T): T => val

console.log(returnArrow<string>("Hello")); // Returns: "Hello" (string)
console.log(returnArrow<number>(78)); // Returns: 78 (number)

 // Generic Function `testType`
 function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
  }
  
  console.log(testType<number>(100));
  // Returns: "The Value Is 100 And Type Is number"
  
  console.log(testType<string>("Elzero"));
  // Returns: "The Value Is Elzero And Type Is string"

   // Generic Function `multipleTypes`

   function multipleTypes<T, U>(val1 : T, val2 : U): string{
    return `The First Value Is ${val1} And Second Value ${val2}`
}

console.log(multipleTypes<string, number>("Osama", 100));
// Returns: "The First Value Is Osama And Second Value 100"

console.log(multipleTypes<string, boolean>("Elzero", true));
// Returns: "The First Value Is Elzero And Second Value true"
