
console.log("A");

// macrotask queue the priority fo the macrotask is low as compared to the microtask ( promises )
setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
// output is A C B 
// all the global veriable execute first 

console.log("----------------------------------------------------------------")

console.log("Script Start"); //1 

setTimeout(() => {
  console.log("Macrotask: setTimeout"); // 5
}, 0);

// here we create the promises 
Promise.resolve().then(() => {
  console.log("Microtask: Promise 1");  //3
}).then(() => {
  console.log("Microtask: Promise 2"); //4
});

console.log("Script End"); //2
// output : script start -> script end -> Microtask: Promise 1 -> Microtask: Promise 2
// microtask queus is just like queue if we have to the 2 microtask queus like all the timer function so in that case it work on  fifo 
// fifo ( first came first server );
