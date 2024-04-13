"use strict";
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
Object.defineProperty(exports, "__esModule", { value: true });
let prices1 = [26000, 40000, 36000];
let prices2 = [32000, 25000, 50000];
let prizes = [...prices1, ...prices2];
prizes.sort((a, b) => a - b);
console.log(prizes);
