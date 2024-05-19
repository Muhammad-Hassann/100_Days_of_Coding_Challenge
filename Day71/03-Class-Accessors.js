"use strict";
// Class Accessors (getter & setter)
Object.defineProperty(exports, "__esModule", { value: true });
class ProductAccessor {
    id;
    name;
    _price;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        if (newPrice < 0) {
            console.log("Price must be a positive value");
        }
        else {
            this._price = newPrice;
        }
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this._price}`;
    }
}
let product1 = new ProductAccessor(342, "Watch");
console.log(product1.getProductInfo());
product1.price = 15;
console.log(product1.getProductInfo());
