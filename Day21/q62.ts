// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface student {
  name: string;
  age: number;
  classes: string[];
}

let student1: student = {
  name: "Hassan",
  age: 18,
  classes: ["TypeScript", "Next.js", "Python"],
};

console.log(student1)