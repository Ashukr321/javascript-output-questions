
let s1 = "hello"; // string is the immutable in nature // string literals  
let s2 = new String("hello"); // create the new string  object 

console.log(typeof s1); // string 
console.log(typeof s2);// object
console.log(s1 == s2); // true // before comparison it do type cor cersion then it /
// s2 object covert into string then compare so this will gives the true  
console.log(s1 === s2); // false