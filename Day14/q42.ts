// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let magiciansName = ["David Copperfield", "Criss Angel", "Dynamo"]

function show_magicians(arr : string[]){
    for(let i of arr){
        console.log(i)
    }
}

function make_great(arr : string[]){
   let updatedArr = arr.slice() 
   for(let i = 0; i < updatedArr.length; i++){
    updatedArr[i] = updatedArr[i] + " the Great"
   }
   return updatedArr
}


let greatMagicians = make_great(magiciansName)
show_magicians(greatMagicians)

export{}