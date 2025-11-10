let user = { name: "Ashu", address: { city: "Patna" } };
let copy = { ...user }; // shallow copy of the data  

// spread operator ...  it use for the shallow copy of the data 

copy.address.city = "Delhi"; // change  this reflect this original data 

console.log(user.address.city); // Delhi