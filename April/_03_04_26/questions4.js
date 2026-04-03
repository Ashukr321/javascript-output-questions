// console.log(NaN == NaN); // false 
// nan is the only value that is not equal to itself also 

// let a = [1, 2, 3]; // array reference data 
// let b = a; // store reference 
// because array is the reference type we store in variable b reference of the a : 

// b.push(4); 
// console.log(a); // 1 2  3 4 

let a = [1, 2, 3];
let b = [...a]; // spread operator : create the shallow copy 


b.push(4);
console.log(a);

// spread operator and shallow copy 
// shallow copy and deep copy is the  use to duplicate the data or copy the data 
// without modify the original data 
// shallow create the object copy only the top level nested data still reference to base object
// rest operator 
console.log("10" + 1 - "1"); // 100

console.log([] == ![]);

console.log([1,2] + [3,4]);
// "1 23 4"