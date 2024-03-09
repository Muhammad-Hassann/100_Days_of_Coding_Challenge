"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I loved Typescript"; }
    console.log("".concat(message, " and the size of shirt is ").concat(size));
}
// Large shirt 
make_shirt();
// Medium Shirt
make_shirt("medium");
// Small shirt
make_shirt("small", "I loved Programming");
