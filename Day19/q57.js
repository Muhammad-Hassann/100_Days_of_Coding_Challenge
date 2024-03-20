// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [87, 67, 89, 56, 78];
var average = grades.reduce(function (elem, elem2) { return elem + elem2; }) / grades.length;
console.log(average);
