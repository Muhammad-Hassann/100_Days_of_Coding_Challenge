// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
var today = new Date;
var hours = today.getHours();
if (hours < 12) {
    console.log("Good Morning");
}
