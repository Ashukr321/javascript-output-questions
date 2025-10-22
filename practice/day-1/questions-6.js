function outer() {
  let a = 7;
  return function inner() {
    console.log(a);
  };
}
const fn = outer();
fn();


// outer function has their own execution context 
// inner has its onw 

// variable looks up 
// closures 
