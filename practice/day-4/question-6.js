let obj1 = { name: "Ashu" }; // object is the reference data type 
// mutable in nature and it store int he heap memory 
let obj2 = obj1; // store the reference of the object obj1 inside the obj2 
obj2.name = "Vijay"; 
console.log(obj1.name); // Vijay 