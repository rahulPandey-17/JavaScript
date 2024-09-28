const prompt = require("prompt-sync")({sigint : true});

let number = prompt("Enter the number : ");
number = Number.parseInt(number);

if (number >= 10 && number <= 20) {
    console.log("True");
}
else {
    console.log("False");
}