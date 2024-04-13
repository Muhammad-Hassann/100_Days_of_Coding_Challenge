// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

let students = new Map<string, string>([
    ["qa12", "Hassan"],
    ["qa114", "Uzair"],
    ["qa233", "Mubashir"]
])

students.forEach((name, id)=>{
    console.log(`Id:${id}, Name: ${name}`)
})