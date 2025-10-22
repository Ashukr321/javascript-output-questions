
console.log(a); // undefined  value 


var a = 10;

// why var give the undefined value 
// var is the hoisted in nature , 
// when is hoisted means , it look move top of the code 
// but internally this goes inside the variable environment object 
// and in case of var , it initialized with undefined 


// so the output give the undefined 
// in case of the  function declaration this give we call access it 
// fd => the initial value is actual function in  the variable environment object 

// example 

hello();// good morning 
function hello (){
  console.log("good morning !")
}

