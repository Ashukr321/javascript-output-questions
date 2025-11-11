console.log("Start"); // synchronous

// macroTask code
setTimeout(() => {
  console.log("Timer 1");
  Promise.resolve().then(() => console.log("Promise inside Timer"));
}, 0);

// microtask
Promise.resolve().then(() => console.log("Promise 1"));

// synchronous code 
console.log("End");

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// Start
// End
// Promise 1
// Timer 1
// Promise 1 
