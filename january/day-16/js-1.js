// create the object 
const user = {
    name :"Ashtosh kumar",
    age:21,

}

// Object.keys // return the all the object of the keys  of  array
const objectKey = Object.keys(user);

console.log(objectKey);
for(let key of objectKey){
    console.log(user[key]) 
    // "Ashutosh kumar "
    // 21
}

//  we have also 1 more function provided by the Object.values
const objectValueArray = Object.values(user);
console.log(objectValueArray);
// Object.entries // this methods return the all object key:value in array formate basically this use for the iterative the 
// the object 

const arrayOfObject =Object.entries(user);
console.log(arrayOfObject);