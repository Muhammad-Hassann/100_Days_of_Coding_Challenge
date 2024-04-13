"use strict";
// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
Object.defineProperty(exports, "__esModule", { value: true });
let programmer = {
    name: "Hassan",
    age: 18,
    skills: {
        codingLanguages: ["JavaScript", "TypeScript"],
        tools: ["VS Code", "Git and GitHub"],
        frameworks: ["Bootstrap", "React"]
    }
};
let { codingLanguages, tools, frameworks } = programmer.skills;
console.log(`Coding Languages : ${codingLanguages[0]}, Tools : ${tools[1]}, Framework : ${frameworks[1]}`);
