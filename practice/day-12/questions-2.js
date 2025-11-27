let a = { num: 10 }; // object 

let b = a; // b is copy the ref of a 
b.num = 20; // update the key of value 
console.log(a.num, b.num); // 20, 20 
