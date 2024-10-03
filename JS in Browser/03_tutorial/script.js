// alert("Enter a number");
// let num = prompt("Enter here : ");
// alert("You entered a number of type " + typeof num);

// we can give default value to prompt
/*let num = prompt("Number : ", "100");   
document.write(num);*/

// confirm()

let num = prompt("Enter the number", "200");
const write = confirm("Do you want to write to the page?");
if (write) {
    document.write(num);
}
else {
    document.write("You don't have permission to write in the page");   
}