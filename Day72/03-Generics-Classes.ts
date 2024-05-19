// GENERIC CLASSES

class User<T = string>{
    constructor(public val : T){}


showMessage(msg : T): void{
    console.log(`${msg} - ${this.val}`)
}
}

let user1 = new User<string>("Hassan")

console.log(user1.val) // Output "Hassan"
user1.showMessage("Hello") // Output: "Hello - Hassan"

// Creating an instance of `User` with a type parameter that can be a number or a string
let userTwo = new User<number | string>(100);

console.log(userTwo.val); // Outputs: 100
userTwo.showMessage("Message"); // Outputs: "Message - 100"