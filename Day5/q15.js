// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
var persons = ["Hammad", "Waqas", "Owais"];
var invitation_message = ", You are invited to dinner today";
persons.forEach(function (element) {
    console.log(element + invitation_message);
});
var not_attend = persons[1];
console.log(not_attend + "removed");
persons.splice(1, 1, "Mubasir");
persons.forEach(function (element) {
    console.log(element + invitation_message);
});
