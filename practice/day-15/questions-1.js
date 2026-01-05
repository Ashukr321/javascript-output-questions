// array of objects
const items = [
  { id: 1 }, // key = id , value = 1
  { id: 2 } 
];


// here we use the map 
//pic one element from array and we it modifiy or change or it can be return a new value 
// finaay it will return a new array 

const result = items.map(item => {
  item.active = true; // by this we add 1 new key value into each item of the array items and return it 
  return item;
});

result[0].id = 99;  
// array is the reference data type 
// here it return a new array but the object inside the array is still the refrence of the original object 



console.log(items[0].id); //  99
console.log(result[0].id); // 99  

// in this problem 
// result is absolutely a new array but the 
// object inside the array is still the reference to the original object so that 
// it value is changed 


console.log(items===result)// false;
// map methods copies sallow copy which is good 
// else we have to store all object seperatly 
