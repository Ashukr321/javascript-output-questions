Promise.resolve().then(() => {
  console.log("1");// sync 
  Promise.resolve().then(() => {
    console.log("2");
  });
});
console.log("3");

// 312
// in javascript everything run top to button 
// synchronous code first execute 
// first microtask queue callback 
// all setTimeOut function is a macro task queue 