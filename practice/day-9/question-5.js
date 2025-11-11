
setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  return Promise.resolve();
}).then(() => {
  console.log("Promise 2");
}).then(() => {
  setTimeout(() => console.log("setTimeout inside Promise"), 0);
}).then(() => {
  console.log("Promise 3");
});




// 1 
// 2 
// 3 
// setTimeout 
// setTimeOut inside Promise