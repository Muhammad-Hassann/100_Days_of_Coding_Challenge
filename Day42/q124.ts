// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

let obj = {
    name : "Hassan",
    age : 18,
    getName: function(){
       return this.name
    }
}

console.log(obj.getName())