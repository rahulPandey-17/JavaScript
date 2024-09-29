text = "please give Rs 1000";
const amount = text.split(" ");
console.log("Amount = " + amount[amount.length - 1]);

// using slice
console.log(Number.parseInt(text.slice(15)));