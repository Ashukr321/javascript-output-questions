console.log([] + []); 
// [] :  this is the empty object 
// [] : empty object : 

// output is not both are added basically both have differnt object referce 
// 2 array + concatenate 

const data = [1,2,4,4]; // array 1 
const data2 = [3432]; // array 2 
// now both are concatenated : 


console.log(typeof (data+data2)); // string

console.log([]==[]);// because in js array is the object : 
// object  is the reference data type  and reference data store in heap memory 
// both object has different address due to this output will be false : 

console.log([] + {}); 
// [] : + : convert empty array to string suing toString(): empty array is "" string 
// {} :  empty object is converted into toPrimitive function :"[object Object]"

// "[object Object]"


//[]:  object
// {} : object 
// this will also concatenate 
const user = {
    name:"ashutosh"
}
console.log(data+user);

console.log([] + []);
// empty object convert into empty string "" then concatenate 

console.log({}+[]);

// {}: "[object Object]"
// [] : ""

console.log({} + []);

console.log(true + false);
// 1 : represent true 
// 0 false  : 
// 1 + 0 : 1 

console.log(0 == false);
// 0 is converted into false 
// == abstract equality check :
// in this case boolean value converted into number 
// false - 0 then check 0==0 : return true 

console.log(0 === false);
// === strict type : 
// first check type : data type if both have the same data type or not if not then return false 
// 0   : <InputNumber min={0} max={100} defaultValue={50} />
// false : boolean it instant return false
