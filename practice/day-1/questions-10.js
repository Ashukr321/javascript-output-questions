let obj1 = { name: "Ashu" }; // object 
let obj2 = structuredClone(obj1);  // copy the shallow copy 
obj2.name = "Kumar";
console.log(obj1.name);
console.log(obj1 == obj2);
// kumar

// object is the non primitive data type
// object is the reference and mutable
//  ob2 is basically store the reference of the obj1

// structuredClone -> clone the deep copy
// obj2 is allocate or we created in heap memory seperatly 
