// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let persons = ["Hammad", "Waqas", "Owais"]
let invitation_message = ", You are invited to dinner today"

console.log("Hey we have more space to invite more people!")
persons.unshift("Dawood")
persons.splice(2, 0, "Araiz")
persons.push("Ibrahim")

persons.forEach(element => {
    console.log(element + invitation_message)
});

// Finding the length of array or How many people I invited
console.log(persons.length)

export{}