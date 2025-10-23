async function run() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}
console.log("0");
run();// 
console.log("3");

//0 1 3 2