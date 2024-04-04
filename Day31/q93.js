// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango
var fruits = ["Apple", "Banana", "Graps", "Papaya"];
var index = fruits.indexOf("Banana");
if (index !== -1) {
    fruits[index] = "Mango";
}
console.log(fruits);
