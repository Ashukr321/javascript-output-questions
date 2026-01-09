var x = 1; // hoisted in nature 

// block we can 
{
    var x = 2;// basically we reassign the value of the x ; bec var is the not the block scope variable  as like let and const 
    let y = 2;
}

console.log(x); // 2  
console.log(y); // undefined ✅