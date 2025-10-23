const add = (a, b) => {
  // console.log(arguments) 
  console.log(this)// this is point to the window object
  return a + b;
}
// here we call the normal function 
console.log(add(5, 2)); // 7 