// Question 147: Explain how to handle errors in a callback pattern.
function fetchData(callback) {
    var error = new Error("Fail to Fetch Data");
    var data = "Some Data";
    if (Math.random() < 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
