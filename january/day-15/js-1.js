
// object literals 
const user = {
  name: 'Tyler',
  // function declaration
  greet() {
    // this
    console.log(`Hello, ${this.name}`); //  Hello Tyler
  }
};

// this keywords is dynamic in nature ,
// its value depend on how we call 

user.greet();// Hello Tyler
const greetFunc = user.greet; 
// here we not call the function only pass the reference 

// function call as methods ( attach to object in case of the fd : this refer to that object)
// only in case of the function declaration and function expression 
greetFunc(); // this reference to object lost 
// in case of the standalone function calling this refers to the window object 
console.log(this); // this only print in the browser 
// window or global object is the part of the browser 