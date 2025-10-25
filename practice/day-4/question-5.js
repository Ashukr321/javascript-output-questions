
// let can reassign but we can't redeclare it 

let a = 10; // primitive data // immutable in nature 
let b = a;//  actual store the value  // b = 10
// b created the new variable in the gec 

b = 20; // modify the value // reassign => done 
console.log(a, b); // 10 , 20 