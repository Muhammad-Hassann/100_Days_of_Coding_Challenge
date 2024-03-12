// T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

function make_shirt(message:string , size:(string | number) ){
   console.log(`${message} and the size of shirt is ${size}`)
}

make_shirt("The color of shirt is blue", "large")