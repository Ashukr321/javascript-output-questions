// const number = [3,41,34,314,31,43,5,5];
// console.log(number.sort()); // this is the sort methods without camparison callback methods 
// // if we have the string items array which we apply simple sort methods then it sort based on the 
// // simple chracter basic

// // example - 2
// const fruits = ["mango","apple","banana"];
// console.log(fruits.sort());


// 2 ways to sort the data using compare callback funtion 
// this compare function return a value this tell the js engine how to compare and make the order
// of the element 

// how work compare function 
const data = [1,34,34,1,34,134];
data.sort((a,b)=>a-b);

// sort methods  modify the orinal array it does't return the new copy of the array 
// it sort inplace sorting 

 

// best practice to use sort methods create the copy of the original array itesm 
// using spread operator   then apply sort methods 




