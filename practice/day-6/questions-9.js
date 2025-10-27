
// closure example 
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}


let fn = outer();
fn(); // 10 