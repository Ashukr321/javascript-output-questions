// console.log("questions 1");

sayHello(); // Hello JS


// function declaration : hoisted in nature , 
// this fd goes into the top of the global env. variable object 
// initial value is func. itself 
function sayHello() {
  console.log("Hello JS");
}

//  but in case of the function expression and arrow function
// both are hoisted in nature but goes into the tdz
// tdz=> temporal dead zone
// fe , and arrow function gives the reference error 
