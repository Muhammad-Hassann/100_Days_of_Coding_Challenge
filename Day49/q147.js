"use strict";
// Question 147: Explain how to handle errors in a callback pattern.
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData(callback) {
    const error = new Error("Fail to Fetch Data");
    const data = "Some Data";
    if (Math.random() < 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData((error, data) => {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
