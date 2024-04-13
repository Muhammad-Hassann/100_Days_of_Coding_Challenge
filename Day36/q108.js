// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function checkStringIdentity(str1, str2) {
    return (str1.toLowerCase() === str2.toLowerCase());
}
console.log(checkStringIdentity("Hello", "World"));
console.log(checkStringIdentity("Hello", "heLlo"));
