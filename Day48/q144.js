// Question 144: Explain the use of the Promise.all() method with an example.
var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("First promise resolved");
    }, 1000);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Second promise resolved");
    }, 2000);
});
var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Third promise resolved");
    }, 3000);
});
// Three promises, now we use Promise.all() method 
var allPromises = Promise.all([p1, p2, p3]);
allPromises.then(function (val) {
    console.log(val);
}).catch(function (err) {
    console.log(err);
});
