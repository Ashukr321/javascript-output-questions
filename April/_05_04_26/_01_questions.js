const obj = {
    name :"Ashutosh",
    age:21
}

const keysOfObject = Object.keys(obj);
console.log(keysOfObject);

const obj2 = obj;
obj2.name  = "Amit";
console.log(obj.name);// Amit
// because object are reference data  type 
// obj2 and obj both are point to the same  memory 

console.log(0==false);  // false => 0 // true 
console.log(0===false); // value is same but both data type is different : 
// 0 : number 
// false : boolean 

