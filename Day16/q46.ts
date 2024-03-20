// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {
    make : "Dell",
    model : "Latitude E6430",
    year : 2016, 
    describe : function(){
        return `The manufacturer of laptop is ${this.make}, its model is ${this.model} and its year of manufacture is ${this.year}`
    }
}

console.log(laptop.describe())

export{}