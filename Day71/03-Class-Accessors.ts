// Class Accessors (getter & setter)

class ProductAccessor{
    private _price : number

    constructor(private id: number, private name: string){
        this._price = 0
    }

    get price(): number{
        return this._price
    }

    set price(newPrice: number){
        if(newPrice < 0){
            console.log("Price must be a positive value")
        }else{
            this._price = newPrice
        }
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this._price}`;
      }
}

let product1 = new ProductAccessor(342, "Watch")

console.log(product1.getProductInfo())

product1.price = 15

console.log(product1.getProductInfo())

