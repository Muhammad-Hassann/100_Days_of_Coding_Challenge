// Question 135: Explain how you can format a JSON string with proper indentation for readability.
var myObj = {
    name: "Hssan",
    age: 18,
    study: "Software Engineering"
};
var jsonString = JSON.stringify(myObj, null, 2);
console.log(jsonString);
