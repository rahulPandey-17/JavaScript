// variables

/*x = 17;
console.log(x);

x = "Rahul Pandey";  // we can change the type of a variable in js during runtime
console.log(x);*/

// var, let and const

// var is globally scoped

/*var y = 20;

{
    var y = 30;
    console.log(y);
}

console.log(y);

// let and const are block scoped

let z = 22;
const a = 100;

{
    let z = 45;
    console.log(z);

    const a = 200;
    console.log(a);

}

console.log(z);
console.log(a);*/

// var can be re-declared within it's scope
/*var name = "Rahul";
var name = "Saurabh";

// let cannot be re-decalred in the same scope 
let name = "Rahul";
let name = "Saurabh";  // this will throw error*/

// but we can update let
let a = 20;
a = 22;

// cannot change the value of a const
const b = 10;
// b = 20;  // will throw a error

// const has to be initialized during declaration
const Name = "Rahul";
// const number; // will throw error