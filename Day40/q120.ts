// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.

function getMovies(arr : string[]){
   for(let i of arr) {
     console.log(i)
   }
}

let movies = ["Avenger Age of Ultron", "Captain America Civil War", "The Social Network"]
getMovies(movies)