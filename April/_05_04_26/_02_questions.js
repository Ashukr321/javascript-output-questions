// foo();

// function foo(){
//     console.log("A");
// }

// const foo = function(){
//     console.log("B");
// }

//  A  : function declaration is hoisted in nature with full body  : their body is moved  inside 
// compilation phase in the gec: global execution context :


// callstack is run all the synchronous code like 
console.log("synchronous code");

// execution order 
// 1. synchronous code callstack code 
// 2. microtask queue 
// 3. macro task queue 
// 4. repeat queue

//  browser web api : 
// this api is provided by browser 
// 1. setTimeout 
// 2. setInterval 


// all the browser web api we can get by the window global object 

// setTimeout : macrotask :


//setTimeout(func, delay);
let a = 120;
const id = setTimeout((a)=>{
    console.log("set time out timmer" + a)
},5000,a);

// console.log(id);




// setTimeout : return the timer id : we can use to cancel the timer 
// this is widely  use in the debouncing concept 
// real example it help to delay in ui action : 
setTimeout(()=>{
    showToast("Saved!");
},500);

// 

