function a() {
  console.log("A start");
  b();
  console.log("A end");
}
function b() {
  console.log("B");
}
a(); // execution start  

// outPut 
// ⭐⭐⭐⭐⭐⭐
// A start 
// B 
// A end 
