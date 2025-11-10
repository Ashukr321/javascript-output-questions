console.log("A"); // synchronous

setTimeout(() => console.log("B"), 0); // asynchronous
Promise.resolve().then(() => console.log("C")); // asynchronous

console.log("D"); // synchronous

// A
// D
// C
// B