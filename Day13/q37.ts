// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message

function make_shirt( size:(string | number) = "Large", message:string = "I loved Typescript"){
    console.log(`${message} and the size of shirt is ${size}`)
}

// Large shirt 
make_shirt()
// Medium Shirt
make_shirt("medium")
// Small shirt
make_shirt("small", "I loved Programming")

 export{}