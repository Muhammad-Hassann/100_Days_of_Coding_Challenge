/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/

let cars : string[] = ["Toyota", "Land Cruiser", "Tesla", "Ferrari"]

let statement1 = "My favorite car is "
let statement2 = "I would like to own a "
let statement3 = "My dream car is "

cars.forEach(element => {
    console.log("\n" + statement1 + element)
    console.log(statement2 + element)
    console.log(statement3 + element) 
});
