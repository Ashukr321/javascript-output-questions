async function first() {
  console.log(1);
  await second();
  console.log(2);
}

async function second() {
  console.log(3);
}

console.log(4);
first();
console.log(5);
// 4 
// 1 
// 3 
// 5
// 2

console.log([] == ![]); //  2 empty object object are the reference data  both have differnet memeory // true
