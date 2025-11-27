const obj = { a: 1 };
Object.freeze(obj); // it prevent to modify the object 
//we can use in env config 
obj.a = 10;
console.log(obj.a); // 1
