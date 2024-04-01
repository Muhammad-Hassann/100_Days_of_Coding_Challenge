// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function upperLowerCase(text : string){
    let upper = text.toUpperCase()
    let lower = text.toLowerCase()
    console.log("UpperCase:", upper, "LowerCase:", lower)
}

upperLowerCase("hAsSaN")