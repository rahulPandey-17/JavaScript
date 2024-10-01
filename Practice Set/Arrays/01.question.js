const prompt = require("prompt-sync")({sigint:true});

const nums = [34, 67, 89];

let num = prompt("Enter the number : ");
num = Number.parseInt(num);

nums.push(num);

console.log("New array is :\n" + nums);