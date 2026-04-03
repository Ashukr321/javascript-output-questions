console.log(a);// undfiend
var a = 10;
// var is the hoisted in top of the  but only the variable not value of the variable 
// let and const are the also in hoisted in nature but goes inside tdz: temporal dead zone : tdz 

// hoisted in nature : 
// hoisting means moving declaration fo the variable top fo the scope before execution : 
// only declaration are  hoisted not assignment 

func();
function func(){
    console.log("function declration")
}
// function declaration are fully hoisted in nature : function name and function body are also hosted in nature : 
// because it available before execution of the code :

// hoisting : hoisting is the javascript behavior where variable and function declaration are moved to the top of their scope during 
// compilation phase before execution of code : 

// there is 2 phase :  happened during execution of the code : 
// 1. creation phase : in this phase the variable and function are store in the memory and hoisting is happened 
// execution phase :  code runs line by line : but js use jit : just in time compilation process : 
