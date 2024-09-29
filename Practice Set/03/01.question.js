const student = {
    maths : 88,
    physics : 90,
    chemistry : 82,
    english : 96,
    cs : 95
};

// printing marks of student

// for loop

for (let i = 0 ; i < Object.keys(student).length ; i++) {
    console.log("Marks of " + Object.keys(student)[i] + " is " + student[Object.keys(student)[i]]);
}

// for-in loop

for (let marks in student) {
    console.log("Marks in " + marks + " : " + student[marks]);
}