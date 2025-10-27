var x = 10; // vd  hoisted , primitive data , immutable 

// fd =>> hoisted 
function test() { 
  console.log(x); // value of the x  
  // var is the function scope 
  var x = 20;
} 
// fd: create its own ec .
// initial value is undefined : = > undefined 
// vd , scope chain , this , arguments

test(); // undefined 