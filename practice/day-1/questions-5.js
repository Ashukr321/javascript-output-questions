

// function declration 
function test() {
  var x = 10;
}

 
console.log(x);  // this x is not defined 

// above the example we case we have 1 test fd 
// inside we create a variable using var keywords  x = 10; 

//  after the function scope we try to access the value of x 


// at initial time 
// fd is hoisted  & their initial value is actual function 
// in line number 9 we try to access the value of x ,
// internally is goes to variable lookup scope chain to the global scope , but they don't get the variable declare with name x 
// so this give error x is not defined 



// as we know that let and const are the block scope 
// and var is the function scope  this is the one of the main region to get 
// error x is undefined variable 
