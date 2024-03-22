// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function scoresAverage(...arr : number[]){
    return arr.reduce((current,acum) => current + acum) / arr.length
}

console.log(scoresAverage(65, 76, 89, 45))