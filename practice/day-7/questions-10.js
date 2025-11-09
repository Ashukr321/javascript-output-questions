function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
const c1 = counter();
c1(); // 1
c1(); // 2
const c2 = counter();
c2(); // 1

// 1
// 2 
// 1 