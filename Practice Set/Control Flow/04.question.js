// ternary operator

const prompt = require("prompt-sync")({sigint:true});

let age = prompt("Enter your age : ");
age = Number.parseInt(age);

(age > 18) ? console.log("Can Drive") : console.log("Cannot Drive");