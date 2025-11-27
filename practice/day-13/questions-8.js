console.log([] + {}); // [Object Object]
console.log({} + []);// [Object Object]


let z = [1, 2, 3];
z.length = 1; // we decrese the length so array lost their data 
console.log(z); [1]

z.length=0;
console.log(z); []


// String is the object
console.log("hello" instanceof String);  // "hello" is the primitive data 
console.log(new String("hello") instanceof String);
// ref object => true

let s = "abc";
s[0] = "z";
console.log(s);