// var : is the function scope 

for (var i = 0; i < 3; i++) {
    // handle by macrotask queue 
    // 3 microtask queue push in the macrotask queue and exectute after 1se 
  setTimeout(() => {
    console.log(i);
  }, 1000); 
  // this execute after 1s -> loop iterate i reach 1 to 3 : it executre 3 
}

// 3 3 3 

// function scope vs block scope 
// var is the function scope 
// let and const are the block scoped 