

console.log(b);  // reference error
console.log(name);// refreence error
let b = 5;
const name = "Ashutosh";

// output is : reference error 
// in case of the let and const both are the hoisted also , but their 
// initial value is  uninitialized  goes inside tdz 
// tdz stand for the temporal dead zone 
