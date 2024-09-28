// for loop

// sum of first n natural numbers using for loop

/*const prompt = require("prompt-sync")({sigint:true});
let n = prompt("Enter n : ");
n = Number.parseInt(n);

let sum = 0;
for (let i = 1 ; i <= n ; i++) {
    sum += i;
}
console.log(sum);*/

// for-in-loop(loops through keys)

/*const marks = {
    rahul : 90,
    krijan : 90,
    prajwal : 90
};

for (let students in marks) {
    console.log("Marks of " + students + " is : " + marks[students]);
}*/

// for-of loop(loops through values)

const numbers = [12, 34, 56, 78, 90];

for (let nums of numbers) {
    console.log(nums);
}