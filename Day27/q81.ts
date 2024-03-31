// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function IteratingObject(obj : object){
    for(let i in obj)
    console.log(`${i} : ${obj[i]}`)
}

IteratingObject({name : "Hassan", age : 18})