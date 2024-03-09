// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let persons = ["Hammad", "Waqas", "Owais"]
let invitation_message = ", You are invited to dinner today"

// console.log("Hey we have more space to invite more people!")
persons.unshift("Dawood")
persons.splice(2, 0, "Araiz")
persons.push("Ibrahim")

// persons.forEach(element => {
//     console.log(element + invitation_message)
// });

console.log("Hey, I'm sorry that we have a mistake in our end, and we can invite only 2 peoples to dinner");


let removed_peoples = persons.splice(0, 4)
let not_invite_message = ", I'm sorry but I can't invite you today."
let still_invited_message = ", You can come today, you are still invited."

// Print Message for Not Invited Peoples
removed_peoples.forEach(element => {
    console.log(element + not_invite_message)
});

// Print Message for Not Invited Peoples
persons.forEach(element => {
    console.log("\n" + element + still_invited_message)
});

// Remove the all items from array for an empty array
persons.splice(0, 2)
console.log(persons)
