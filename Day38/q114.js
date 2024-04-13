// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
var students = new Map([
    ["qa12", "Hassan"],
    ["qa114", "Uzair"],
    ["qa233", "Mubashir"]
]);
students.forEach(function (name, id) {
    console.log("Id:".concat(id, ", Name: ").concat(name));
});
