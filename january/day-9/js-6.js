for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
// 3 3 3 
console.log("\n");
// 0  1 2 
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1);
}