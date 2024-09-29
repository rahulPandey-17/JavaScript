const prompt = require("prompt-sync")({sigint:true});

const correctNumber = 20;
let num;
console.log(num);

/*
Imporatnt Note :
-> In this program when i just declared the variable(num) without assigning any value to it js gives it the default value of undefined.
-> Now in the condition in while statement the undefined(which behaves like a falsy value in case of comparison) is being compared to a integer, both are of different types so the comparsion is not possible.
-> But here js performs something called type coersion(it tries to convert both values to a similar data-type implicitly, in this case to a integer).
-> So when undefined is converted to a integer it becomes a NaN(Not a Number).
-> So the condition becomes (NaN != 20), which is true, hence the program works.
*/

while (num != correctNumber) {
    num = prompt("Enter the number : ");
}