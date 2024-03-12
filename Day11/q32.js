// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var usernames = ["Hammad", "Ehtisham", "waseem", "Usama", "Faiz"];
var new_users = ["Bilal", "Ahmad", "Waseem", "Mehmmod", "HAMMAD"];
function is_un_available(user) {
    return !usernames.some(function (element) { return element.toLowerCase() === user.toLowerCase(); });
}
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var i = new_users_1[_i];
    if (is_un_available(i)) {
        console.log("".concat(i, " is available"));
    }
    else {
        console.log("".concat(i, " is not available. Kindly choose other Username!"));
    }
}
