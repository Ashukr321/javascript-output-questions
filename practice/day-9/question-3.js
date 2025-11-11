const p1 = new Promise((resolve) => {
  console.log("Promise 1");
  setTimeout(() => {
    resolve("Resolved 1");
  }, 0);
});


const p2 = p1.then((res) => {
  console.log(res);
  return "Resolved 2";
});


p2.then((res) => console.log(res));

console.log("End");
