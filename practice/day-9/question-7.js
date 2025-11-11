
let str = "JavaScript";// let , let and const are the block scope 

console.log(str.slice(4));// slice -> 4 , last  Script
console.log(str.substring(4)); //  Script
console.log(str.substr(4, 3)); //   Scr

console.log(str.slice(-6))// 10-6 => 4 // output is   (Script)
// slice method extract the section of the string from the string
// JavaScript
// index start from the 0
// endIndex is excluded which is not included
// slice methods can accept the negative value
// negative index means count from the end 
// when we give the negative index then javascript treated as string length + negative index 
// 10 + (-6) // 4 
// start index is 4 

// negative , treat as stringLength + (-value) => start or end index becomes 






// if we not give the end Index then it  goes to the end index  of the string

// subString methods
// subString is almost same as slice methods
// but it does't accept the negative value
// same if we not provide the end index then index goes to end index of the string


// subString(4,3)
// 4 -> start Index
// 3 is the length of the character we want to extract from string 

