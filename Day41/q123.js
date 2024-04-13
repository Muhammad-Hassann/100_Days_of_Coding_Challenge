// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function stopOnVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        if (vowels.includes(i)) {
            console.log("first vowels found ".concat(i));
            break;
        }
        console.log(i);
    }
}
stopOnVowel("dhyuisd");
