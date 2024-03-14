// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

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

let copyMagicians = ["David Copperfield", "Criss Angel", "Dynamo"]

let greatMagicians = make_great(magiciansName)

show_magicians(copyMagicians)
show_magicians(greatMagicians)

export{}