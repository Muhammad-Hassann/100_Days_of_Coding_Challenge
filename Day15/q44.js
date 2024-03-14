// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function sandwich(ingredients) {
    if (ingredients.length === 0) {
        console.log("You must need to order at least one ingredient for your sandwich");
        return;
    }
    console.log("You orderd Sandwich with this ingredients:");
    for (var _i = 0, ingredients_1 = ingredients; _i < ingredients_1.length; _i++) {
        var ingredient = ingredients_1[_i];
        console.log(ingredient);
    }
}
sandwich(["Bread", "Cheese", "Tomato"]);
sandwich(["Bread", "Chicken"]);
sandwich(["Bread"]);
