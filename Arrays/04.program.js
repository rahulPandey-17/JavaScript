// advance array methods

// const nums = [45, 67, 89];

// map() {returns a new array}
/*const plusOne = nums.map((number) => {
    return number + 1;
});
// console.log(plusOne);

// map can take thee arguments 1. array element, 2. array index, 3. whole array
const complexCalc = nums.map((number, index, arr) => {
    console.log((number + index), arr);
});*/

// filter() {returns a new array with filtered values based on some condition}
const values = [23, 56, 89, 70, 55, 33];
/*const newArr = values.filter((number) => {
    return number % 2 == 0;
});
console.log(newArr);*/

// reduce() {reduces the array to a single value}
    const newArr = values.reduce((num1, num2) => {
        return num1 + num2;
    });
console.log(newArr);