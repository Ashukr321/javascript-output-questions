new Promise((resolve) => {
  console.log("Promise start");
  resolve("Done");
}).then((res) => {
  console.log(res);
});

console.log("After promise");