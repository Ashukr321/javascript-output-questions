// problem : statement : we have a given array : remove duplicate element and print the frequency of each element 

const arr = [1, 2, 2, 3, 3, 4, 4, 4, 0];
// 
const freq = {}; // create the freq empty object 
for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
}

// Object.keys(objectRef); return array of all object keys 
console.log(Object.keys(freq));

//  Object.keys(objectRef); : this methods always return a keys of array and all keys will be converted into string format 
console.log(Object.values(freq)[0]);

// all these are return a array
// Object.keys : ye object ke keys are array return krta hai and all keys will be converted into string form
// Object.values:  ye bhi object ka sabhi values ka array return krta hai 
// Object.entries :  ye each key value ka yek separate array bana ke return krta hai :
console.log(Object.entries(freq));