var x = 10; // hoisted in nature 
// test fd is also hoisted 

// var is the function scope 
function test() {
  console.log(x);  // we access the value of the x 
  // before declaration , in that case value of var is assign with undefined => 
  var x = 20;
}
test(); // undefined 