// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

function stopOnVowel(str : string){
    let vowels = "aeiouAEIOU"
    for (const i of str) {
        if(vowels.includes(i)){
            console.log(`first vowels found ${i}`)
            break;
        }
     console.log(i)   
    }
}

stopOnVowel("dhyuisd")