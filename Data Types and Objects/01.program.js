// primitive data-types and object

// There are 7 primitive data-types in js
let a = 100;                             // number
let b = null;                            // null
let c = "Rahul";                         // string
let d = Symbol("I am a symbol");         // symbol
let e = true;                            // boolean
let f = BigInt("100000");                // bigint
let g = undefined;                       // undefined

console.log(a, b, c, d, e, f, g);

// we can find the type of a variable by using typeof
console.log(typeof d);

// object

const item = {
    "Name" : "Shutter",
    "Price" : 600
};

console.log(item);

// we can access the object members by using the syntax below

console.log(item["Name"]);
console.log(item["Price"]);