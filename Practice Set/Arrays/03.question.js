// filter numbers divisible by 10

const arr = [23, 40, 55, 77, 100, 150, 200];

const filteredArray = arr.filter((number) => {
    return number % 10 == 0;
});

console.log(filteredArray);