// loops with arrays

const nums = [2, 3, 4, 6, 7, 8];

// for-loop
/*for (let i = 0 ; i < nums.length ; i++) {
    console.log(nums[i]);
}*/

// forEach-loop
/*nums.forEach((number) => {
    console.log(10 * number);
});*/

// Array.from() {converts any other object to string}
/*let Name = "Rahul";
let newName = Array.from(Name);
console.log(newName);*/

// for-of loop {used to access array elements}
/*for (let number of nums) {
    console.log(number);
}*/

// for-in loop {used to access array index(they(indexes) are also kind of keys)}
for (let index in nums) {
    console.log(index);
}