// . Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
function show_magicians(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        console.log(i);
    }
}
var magiciansName = ["Harry Potter", "Harmaine Gringer", "Professor Dulmadoor"];
show_magicians(magiciansName);
