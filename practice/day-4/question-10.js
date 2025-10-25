let user1 = { name: "Ashu" };
let user2 = { ...user1 }; // shallow copy  // create object 
user2.name = "Vijay";
console.log(user1.name); // Ashu