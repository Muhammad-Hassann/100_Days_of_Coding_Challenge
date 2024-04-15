"use strict";
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
Object.defineProperty(exports, "__esModule", { value: true });
function whileBreak() {
    let i = 1;
    while (i <= 10) {
        if (i === 5) {
            break;
        }
        console.log(i);
        i++;
    }
}
whileBreak();
