"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractItem {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNewId() {
        return this.nextId++;
    }
}
class Item extends AbstractItem {
    constructor(id, name) {
        super(id, name);
    }
    getItem() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
let product = new Item(AbstractItem.generateNewId(), "Watch");
let product2 = new Item(AbstractItem.generateNewId(), "Glass");
console.log(product.getItem());
console.log(product2.getItem());
