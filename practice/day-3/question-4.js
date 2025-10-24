const a = { val: 10 }; // a has the different memory allocation 
// object is the reference data type 
// object is the mutable 
const b = { val: 10 }; // b is the another object so the address of the b object is different
console.log(a === b);  //  false 
// a and b object has the different memory addresses