var a = 5; // hoisted in nature 
// iife : immediate invokation function expression this call just after
(function() {
    console.log(a);// undefiend
    var a = 10;
    console.log(a); // 10  ✅
})();

var x = 10;

// this is the fd : this move to top of the code at compilation phase of the js code
function test() {
    // in this scope 
    // x is not found : 
  if (x > 20) {
    var x = 50;
  }
  console.log(x); // undefiend
}

test(); 