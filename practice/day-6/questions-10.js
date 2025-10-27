function counter() {
  let count = 0;
  return function() {
    count++;// post increment
    console.log(count); // 1 
  };
}
const c1 = counter();  
c1(); // 1 
c1(); // 2
const c2 = counter();
c2();// 1 


// 1 2 1 