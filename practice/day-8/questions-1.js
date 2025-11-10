// global scope 
let a = 10;


{
  let a = 20;
  {
    let a = 30;
    console.log(a); // 30 
  }
}

// let and const are the block scope
// var is the function scope 

