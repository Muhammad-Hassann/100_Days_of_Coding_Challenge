/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
var cars = ["Toyota", "Land Cruiser", "Tesla", "Ferrari"];
var statement1 = "My favorite car is ";
var statement2 = "I would like to own a ";
var statement3 = "My dream car is ";
cars.forEach(function (element) {
    console.log("\n" + statement1 + element);
    console.log(statement2 + element);
    console.log(statement3 + element);
});
