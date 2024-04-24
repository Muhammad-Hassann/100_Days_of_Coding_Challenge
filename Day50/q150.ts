// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

console.log("Before Synchronous Operation")
for(let i = 0; i < 10; i++){
    console.log(i)
}
console.log("After Synchronous Operation")

console.log("Before Asynchronous Operation")
setTimeout(() => {
    console.log("It was run after 1 second")
}, 1000);
console.log("After Asynchronous Operation")