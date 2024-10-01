// arrays(variables that can store more than one values)

// const marks = [88, 91, 92, 80];
// console.log(marks);

// we can put multiple data-types in arrays in js
const mix = ["Rahul", true, 17];

// we can access array values using index
// console.log(mix[0]);

// we can access array values using for loop

// normal for loop
/*for (let i = 0 ; i < mix.length ; i++) {
    console.log(mix[i]);
}

// for-of loop
for (let values of mix) {
    console.log(values);
}*/

// we can add and modify values in an array

mix[0] = "Saurabh";
mix[3] = "Alok Nagar";

for (let i = 0 ; i < mix.length ; i++) {
    console.log(mix[i]);
}