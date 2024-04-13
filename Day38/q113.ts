// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

let countriesCapitals = new Map<string, string>([
    ["Pakistan", "Islamabad"],
    ["Turkey", "Istanbul"],
    ["Canada", "Ottawa"]
])

console.log(countriesCapitals.get("Canada"))