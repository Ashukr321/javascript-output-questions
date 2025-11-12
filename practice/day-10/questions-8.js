
let s = "  hello   world  ";
let result = s.trim().split(/\s+/).reverse().join(" ");
console.log(result); // reverse the string 

// /\s+/ regular string expression 
// join methods is use to combined array to single string 
