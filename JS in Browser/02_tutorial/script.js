// console.table()

/*const items = {
    Banana : 100,
    Apple : 330,
    Chiku : 120,
    PineApple : 100
};

console.table(items);

// console.error()
console.error("This is a error message");

// console.warn()
console.warn("This is a warning message");

// console.assert()
console.assert(100 < 50);

// console.info()
console.info("Important Message")  // it is very similar to console.log(), but in browser console.log() itself comes under info section.*/

// console.time()/console.timeEnd()
console.time("for-loop");
for (let i = 1 ; i <= 5 ; i++) {
    console.log(i);
}
console.timeEnd("for-loop");