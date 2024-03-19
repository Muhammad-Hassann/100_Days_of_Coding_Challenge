// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var programmer = {
    name: "Hassan",
    age: 18,
    skills: {
        codingLanguages: ["JavaScript", "TypeScript"],
        tools: ["VS Code", "Git and GitHub"],
        frameworks: ["Bootstrap", "React"]
    }
};
var _a = programmer.skills, codingLanguages = _a.codingLanguages, tools = _a.tools, frameworks = _a.frameworks;
console.log("Coding Languages : ".concat(codingLanguages[0], ", Tools : ").concat(tools[1], ", Framework : ").concat(frameworks[1]));
