let fruits = ["apple", "banana"]; // array 
// let tropical = fruits; // reference assign in the tropical variable 

let tropical = [...fruits]; // reference assign in the tropical variable 
// here we use the spread operator which is basically spread all the element of the array fruites 


tropical.push("mango"); // this mutate the orignal fruites  means it will add mango in the fruits 

console.log(fruits); // ["apple","banana"];
console.log(tropical); //  ["apple","banana","mango"]

// because object is the reference data type 
// they store in the heap memory 
