
// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type shape = {
    typeOFShape : "rectangle" | "circle"
    radius? : number
    height? : number
    width? : number
}

let circle : shape = {typeOFShape : "circle", radius : 7}

let rectangle : shape = {typeOFShape : "rectangle", height: 6}

console.log(circle)
console.log(rectangle)