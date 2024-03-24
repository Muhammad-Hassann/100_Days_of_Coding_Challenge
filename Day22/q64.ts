// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

function merge(text : string, num : number){
    return `"${text} : ${num}"`
}

console.log(merge("Age", 18))