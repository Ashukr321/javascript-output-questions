// fd : functional declaration 
function test(a, b = a) { 
    //  here b  is the default parameters 
  console.log(a, b); 
} 
test(5); // 5,5 

console.log(...[..."ABCD"]); // spread operator expand  in the individual value 
// A B C D 
