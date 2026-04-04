for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// output will be 2 2 2 

// function scope and block scope 

//  scope : where a variable can be accessible visible in your code 
// function scope means a variable declared with var keywords is access to whole function scope not just block 
// let and const are the block scope : can be access within the block of code :  {} 


// steps :  initialization 
// condition check 
// body execute 
// increment 
// again condition check 


// compilation phase : during var is hoisted : move top of the code with declaration 
// execution phase : 

// var is hoisted in nature 
// but let and const are not hoisted in nature 
