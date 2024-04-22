// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var myPromise = new Promise(function (resolve, reject) {
    var success = Math.random() < 0.5;
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
myPromise.then(function (res) {
    console.log(res);
}).catch(function (error) {
    console.log(error);
});
