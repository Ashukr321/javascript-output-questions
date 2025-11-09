let x = 10;  //global variable 



function print() {
  console.log(x);  // access via global variable which is access to any where 
}

{
  let x = 20; // x= 20  // let and const are the block scope 
  // value of the let and const can only access within the { }
  print();
}
