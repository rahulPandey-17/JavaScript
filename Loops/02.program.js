const prompt = require("prompt-sync")({sigint:true});

let n = prompt("Enter the value of n : ");
n = Number.parseInt(n);

/*let i = 1;
while (i < n) {
    console.log(i);
    i++;
}*/

let i = 10;

// do-while loop

do {
    console.log(i);
}while(i < n);     // runs atleast once