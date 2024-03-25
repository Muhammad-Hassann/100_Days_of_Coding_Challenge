// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    var name1 = "Let variable inside the block";
    var name2 = "Const variable inside the block";
    console.log(name1);
    console.log(name2);
}
try {
    console.log(name1);
}
catch (err) {
    console.log("variables with let keyword are not acsessible outside the block");
}
try {
    console.log(name2);
}
catch (err) {
    console.log("variables with const keyword are not acsessible outside the block");
}
