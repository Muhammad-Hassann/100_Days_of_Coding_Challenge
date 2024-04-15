// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

let piWithLet = 3.14;
piWithLet = 4.16; // This is what we don't want

const piWithConst = 3.14;
try {
  // piWithConst = 5.16;  // Comment because it gives error
} catch (err) {
  console.log("Can't change the value of PI");
}
