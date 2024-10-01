// use reduce to find the factorial of a number

const factorial = [1, 2, 3, 4, 5];

const answer = factorial.reduce((num1, num2) => {
    return num1 * num2;
});

console.log("Factorial of 5 is " + answer);