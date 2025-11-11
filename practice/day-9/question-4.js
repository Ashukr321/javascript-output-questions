
async function asyncFunc() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}


console.log("Start");
asyncFunc();
console.log("End");