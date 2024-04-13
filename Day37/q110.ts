// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function getGrades(num : number){
    if(num >= 80){
        return "A"
    }else if(num >= 70){
        return "B"
    }else if(num >= 60){
        return "C"
    }else if(num >= 50 ){
        return "D"
    }else if(num < 50){
        return "F"
    }
}

console.log(getGrades(67))
console.log(getGrades(95))
console.log(getGrades(73))
console.log(getGrades(49))