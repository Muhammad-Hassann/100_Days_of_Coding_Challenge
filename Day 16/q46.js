"use strict";
// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
Object.defineProperty(exports, "__esModule", { value: true });
var laptop = {
    make: "Dell",
    model: "Latitude E6430",
    year: 2016,
    dscribe: function () {
        return "The manufacturer of laptop is ".concat(this.make, ", its model is ").concat(this.model, " and its year of manufacture is ").concat(this.year);
    }
};
console.log(laptop.dscribe());
