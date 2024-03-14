// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
type car_obj = {
    manufacturer : string,
    model_name : string,
    color? : string
    wheels? : number
}

function car(car : car_obj){
    console.log(car)
}

car({manufacturer : "Toyota", model_name : "Corolla", color : "Black"})
car({manufacturer : "Suzuki", model_name : "Swift", wheels : 4})
car({manufacturer : "Honda", model_name : "Civic"})

export{}