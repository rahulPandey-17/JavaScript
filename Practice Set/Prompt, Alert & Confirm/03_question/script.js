let age = prompt("Enter your age : ");
age = Number.parseInt(age);

if (age < 0) {
  console.error("Age cannot be negative");  
}