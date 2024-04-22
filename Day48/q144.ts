// Question 144: Explain the use of the Promise.all() method with an example.

let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("First promise resolved")
    }, 1000);
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Second promise resolved")
    }, 2000);
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Third promise resolved")
    }, 3000);
})
// Three promises, now we use Promise.all() method 

let allPromises = Promise.all([p1, p2, p3])
allPromises.then((val)=>{
    console.log(val)
}).catch((err)=>{
    console.log(err)
})