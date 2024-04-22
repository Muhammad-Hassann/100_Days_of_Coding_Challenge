// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

let myPromise = new Promise<string>((resolve, reject)=>{
   let success = Math.random() < 0.5
   if(success){
    resolve("Success!")
   }else{
    reject(new Error("Failure"))
   }
})

myPromise.then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})