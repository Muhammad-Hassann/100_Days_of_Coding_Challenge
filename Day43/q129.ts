// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

let obj = {
    name: "Hassan",
    traditionalFunction: function(){
       console.log(`Traditional Function: ${this.name}`)
    },
    arrowFunction: ()=>{
        console.log(`Arrow Function: ${this.name}`) // Give error "Object is possibly 'undefined'"
    } 
}

obj.traditionalFunction()
obj.arrowFunction()