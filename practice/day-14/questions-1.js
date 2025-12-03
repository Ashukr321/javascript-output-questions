var a = 1; 

// iife : immediate invokation function expression
(function(){
  console.log(a); // undefiend 
  var a = 2;
})();
