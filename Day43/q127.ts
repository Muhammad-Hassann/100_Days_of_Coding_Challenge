// Question 127: Convert a traditional function expression to an arrow function.

function addTraditionalFunction(num1 : number, num2 :number){
        return num1 + num2
} 

const addArrowFunction = (num1 : number, num2 : number)=>{
    return num1 + num2
}

console.log(addTraditionalFunction(6 , 2))
console.log(addArrowFunction(6 , 2))