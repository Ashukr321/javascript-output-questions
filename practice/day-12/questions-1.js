console.log("Day 12 ")


console.log([1, 2, 3] + [4, 5, 6]);
// ? why 
// here we try  add 2 array using + operator but + operator not add 2 array directly 
// as we know array is the referecene type data // all ref => object 
// both array are converted into string then string concatenation happend 
// "1 2 3"+ "4  5 6 " => 1 2  34 5 6 


// 1 , 2 34, 5, 6 

// edge case solution if we want to merge these two array in that we can use array.concat methods 
console.log([12,4].concat([12,45]));
