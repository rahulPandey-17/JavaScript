const prompt = require ("prompt-sync")({sigint: true})

/*let age = prompt("Enter your age : ");
age = Number.parseInt(age);

// if-else

if (age < 18) {
    console.log("No Liscence");
}
else {
    console.log("Liscence Available");
}*/

// if-elseif-else

/*let number = prompt("Enter the number : ");
number = Number.parseInt(number);

if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}*/

// Ternary Operator

let age = prompt("Enter the age : ");
age = Number.parseInt(age);
(age >= 18) ? console.log("Can Vote") : console.log("Cannot Vote");