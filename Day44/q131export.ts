// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

export class Student{
    id: string
    name: string

    constructor(id: string, name : string){
        this.id = id
        this.name = name
    }

    getStudent(){
        console.log(`Student Id: ${this.id}, Student name: ${this.name}`)
    }
}