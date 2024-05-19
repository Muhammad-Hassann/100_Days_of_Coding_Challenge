"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductStatic {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static getNewId() {
        return this.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
let product1 = new ProductStatic(ProductStatic.getNewId(), "Watch");
let product2 = new ProductStatic(ProductStatic.getNewId(), "Glass");
console.log(product1.getProductInfo());
console.log(product2.getProductInfo());
