const userA = { name: "Alice", settings: { theme: "dark" } };
const userB = { ...userA }; // spread operator only do the shallow copy 
 // shallow copy means it only copy the outer level of the element 

userB.name = "Bob"; // ✅
userB.settings.theme = "light"; // this still reference to the userA *due to nested and we use spread [...] operator

console.log(userA.name); //Alice
console.log(userA.settings.theme); // light ✅

// Object.assign ()// to perform the shallow copy 
// we need to perform deep copy for that we have the function structuredClose();

const deepCopy = structuredClone(userA); // here we do the deep copy 
// structuredClone();

deepCopy.settings.theme= "adfad";

console.log(deepCopy);
console.log(userA);