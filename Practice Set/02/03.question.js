// divisibility test

const prompt = require("prompt-sync")({sigint:true});

let num = prompt("Enter the number : ");
num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
    console.log("True");
}
else {
    console.log("False");
}