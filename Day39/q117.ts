// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function getDefault(num: number){
    switch(num){
        case 1:
        case 2:
            console.log("JavaScript")
            break
        case 3:
        case 4:
            console.log("TypeScript")
            break
        default :
            console.log("Hello world")
            break
    }
}

getDefault(7)
getDefault(3)