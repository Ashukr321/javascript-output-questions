// array we have to sort the array 
const arrayData = [3,3,3,5,1,3,5,8,6];

// inplace : modify the orignal array 
arrayData.sort((a,b)=>a-b);// sort the original array in accending order
console.log(arrayData)


const arr = [30, 10 , 5,20];

arr.sort((a,b)=>a-b);//accesnding order
console.log(arr);

// step 1 : a = 30 , b = 10 
//     a-b : 30-10 = +Ve swap 
//     10 , 30
// step 2 
//     a : 30 , b = 5 
//     30 - 5  25 +ve 
//     swap 
//     5 30 

// // by defautl sort methods sort the string alaphabetically 


// 3 page 

// 30 , 10 
// a-b : 
// 10 - 30 = 20
// in accending order 
// result <0  keep a before b   : 10 30 
// result >0  keep b before a : swap 10 30 : 
// result =0 keep order 
