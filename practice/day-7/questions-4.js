function a() {
  console.log("A start");
  b();
  console.log("A end");
}
function b() {
  console.log("B");
}
a();

// A start 
// B 
// E end 