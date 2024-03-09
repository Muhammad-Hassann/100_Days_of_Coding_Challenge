// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

let persons : string[] = ["Hammad", "Waqas", "Owais"]
let invitation_message = ", You are invited to dinner today"

persons.forEach(element => {
    console.log(element + invitation_message)
});

let not_attend = persons[1]
console.log(not_attend + " removed")

persons.splice(1, 1, "Mubasir")
persons.forEach(element => {
    console.log(element + invitation_message)
});

export {}