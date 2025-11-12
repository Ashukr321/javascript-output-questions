
let text = "5" + 5 + 5; // 555 // 5 converted into string then "5"+"5"+"5" == 555
let num = 5 + 5 + "5"; // 10+"5"// 10 is converted into string then concat = 105
console.log(text);
console.log(num);
//  + operator evaluate from left to right 