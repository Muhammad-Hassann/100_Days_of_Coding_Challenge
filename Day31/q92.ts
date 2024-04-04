// Question 92: Write a function to remove the last element from an array and return the removed element.

function removeElement<T>(arr : T[]): T | undefined{
    return arr.pop()    
}

let fruits = ["Apple", "Mango", "Graps"]
console.log(removeElement(fruits))
console.log(fruits)

export{}