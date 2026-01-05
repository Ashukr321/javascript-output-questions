let fruits = ["apple", "banana"]; // array 
let tropical = fruits; // reference assign in the tropical variable 

tropical.push("mango"); // this mutate the orignal fruites  means it will add mango in the fruits 

console.log(fruits); // ["apple","banana","mango"];
console.log(tropical); //  ["apple","banana","mango"]

// because object is the reference data type 
// they store in the heap memory 
