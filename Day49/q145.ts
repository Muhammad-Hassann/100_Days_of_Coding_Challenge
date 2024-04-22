// Question 145: Create a function that accepts a callback and invokes it with some arguments.

function executeCallback(callback:(arg1: number, arg2: number)=> void,
num1 : number,
num2 : number,
): void{
   callback(num1, num2) 
}

function add(a: number, b: number){
    console.log(a + b)
}

executeCallback(add, 2, 6)