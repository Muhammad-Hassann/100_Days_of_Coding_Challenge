// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function hobbies(...hobby : string[]){
      hobby.forEach(element => {
        console.log(`I enjoy ${element}`)
      });
}

hobbies("Cricket", "Cycling", "Book reading", "Bike Riding")