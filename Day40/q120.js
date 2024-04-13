// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
function getMovies(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        console.log(i);
    }
}
var movies = ["Avenger Age of Ultron", "Captain America Civil War", "The Social Network"];
getMovies(movies);
