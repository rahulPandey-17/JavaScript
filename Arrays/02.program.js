// array methods

const nums = [1, 2, 3, 4];

// toString() {to convert a array into a string}
// console.log("Before converting the array : " + typeof nums);
// nums.toString();
// console.log("After converting the array the type is " + typeof nums);  // it is still prinitng the type as object because the .toString() does not modify the original array
// const num = nums.toString();  // this will give type as string
// console.log(typeof num);

// join()
const names = ["Rahul", "Saurabh", "Sakshi", "Tejaswi"]
/*const joinedNames = names.join("-");  // join returns a string
console.log(typeof joinedNames);*/

// pop() {removes the last element of the array and updates the original array}
names.pop();
console.log(names);

// push() {adds a new element to the end of the array and updates the original array}
names.push("Tejaswi");
console.log(names);

// shift() {removes the first element of the array and updates the original array}
nums.shift();
console.log(nums);

// unshift() {adds an element to the start of the array and updates the original array}
nums.unshift(12);
console.log(nums);