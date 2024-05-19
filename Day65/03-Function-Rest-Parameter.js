"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addAll(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll(38, 87, 95, 45));
