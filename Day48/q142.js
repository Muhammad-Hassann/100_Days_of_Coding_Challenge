"use strict";
// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
Object.defineProperty(exports, "__esModule", { value: true });
let resolvesHello = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});
resolvesHello.then((res) => console.log(res));
