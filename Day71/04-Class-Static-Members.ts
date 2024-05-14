class ProductStatic{
    private static nextId : number = 1

    constructor(private id: number, private name: string) {}

    static getNewId(): number{
        return this.nextId++
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
      }

}

let product1 = new ProductStatic(ProductStatic.getNewId(), "Watch")
let product2 = new ProductStatic(ProductStatic.getNewId(), "Glass")

console.log(product1.getProductInfo());
console.log(product2.getProductInfo());
