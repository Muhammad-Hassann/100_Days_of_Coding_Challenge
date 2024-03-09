// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let persons : string[] = ["Hammad", "Waqas", "Owais"]
let invitation_message = ", You are invited to dinner today"

// persons.forEach(element => {
//     console.log(element + invitation_message)
// });

// let not_attend = persons[1]
// console.log(not_attend + " removed")

// persons.splice(1, 1, "Mubasir")
// persons.forEach(element => {
//     console.log(element + invitation_message)
// });

console.log("Hey we have more space to invite more people!")
persons.unshift("Dawood")
persons.splice(2, 0, "Araiz")
persons.push("Ibrahim")

persons.forEach(element => {
    console.log(element + invitation_message)
});

export{}
