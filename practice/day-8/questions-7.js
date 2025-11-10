console.log("Start");

const promise = new Promise((resolve, reject) => {
  console.log("Inside Promise");
  resolve("Resolved");
});

promise.then((res) => console.log(res));

console.log("End");

// start
// Inside Promises
// End
//Resolve

// until the promises is resolve the executor move to the next line and execute it 
