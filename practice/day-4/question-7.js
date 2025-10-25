let arr1 = [1, 2, 3]; // ref. store -> heap , mutable 
let arr2 = arr1; // copy of ref ,var-> arr2 
arr2.push(4); // new number add into the array 
console.log(arr1); // [1,2,3,4];
