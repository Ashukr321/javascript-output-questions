
f(); // ? A 


// function declarations is hoisted means complete function move to the 
// global environment 
function f() { console.log('A'); }

try {
  g(); // ? this throw the error and it moves to the catch block 
} catch (e) {
  console.log(e.name); // what  does name methods 

}


// this  is the function expression which is hoisted in nature but it move to the tdz 
// tdz => temporal dead zone 

var g = function () { console.log('B'); };

// A 
// TypeError

