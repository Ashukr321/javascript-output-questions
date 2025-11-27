

console.log(((0.1 + 0.2).toFixed(1)) === 0.3); // false why 


// 0.1+ 0.2 === 0.3 

// false why 

// 0.1 + 0.2 floating point number can't represent exactly 2 digit so their sum becomes
// 0.30000000004 like this due to this this give false 
