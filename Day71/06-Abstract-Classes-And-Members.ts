abstract class AbstractItem{
    private static nextId : number = 1

    constructor(public id: number, public name: string){}

    static generateNewId(): number{
        return this.nextId++
        
    }

    abstract getItem(): string;
}

class Item extends AbstractItem{
    constructor(id: number, name: string){
        super(id, name)
    }

    getItem(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

let product = new Item(AbstractItem.generateNewId(), "Watch") 
let product2 = new Item(AbstractItem.generateNewId(), "Glass") 

console.log(product.getItem())
console.log(product2.getItem())