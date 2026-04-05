const obj = {
    name :"Ashutosh",
    age:21
}

const keysOfObject = Object.keys(obj);
console.log(keysOfObject);

const obj2 = obj;
obj2.name  = "Amit";
console.log(obj.name);// Amit
// because object are reference data  type 
// obj2 and obj both are point to the same  memory 

console.log(0==false);  // false => 0 // true 
console.log(0===false); // value is same but both data type is different : 
// 0 : number 
// false : boolean 
// all the object is store inside the heap  in  js engine 

// == : this will do type coercion: false is 0 is converted into false : then compare with value 

// callback queue : 
// 1. macrotask queue 
// 2. microtask queue :

console.log("Start");
setTimeout(()=>console.log("timeout"),2000);
Promise.resolve().then(()=>console.log("promise resolve"));
console.log("End");

// output will be : 
// start 
// end 
// primise resolve 
// timeout 
// microtask queue has the higher priority then the macrotask 
// all the timeout api has low priority then promises : 

console.log(typeof []); // Object 
// array  is object 

//  internal coercion 
console.log("1"-1);// 0 
console.log("234"+3);// 2343
// - : it convert string into number 
// + : it will concatenate the number into string : 


