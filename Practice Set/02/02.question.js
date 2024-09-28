// switch-case

const prompt = require("prompt-sync")({sigint:true});

let num = prompt("Enter the number : ");
num = Number.parseInt(num);

switch (num) {

    case 1 : console.log("Monday");
    break;

    case 2 : console.log("Tuesday");
    break;

    case 3 : console.log("Wednesday");
    break;

    case 4 : console.log("Thrusday");
    break;

    case 5 : console.log("Friday");
    break;

    case 6 : console.log("Saturday");
    break;

    case 7 : console.log("Sunday");
    break;

    default : console.log("Invalid Number");

}