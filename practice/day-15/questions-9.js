// slice  vs splice  array methods 

// slice methods as per name suggest it only  extract the value from the array without chaning the original array 
// slice methods take 2 parameters 
// start index and end index (end index is excluded  )
// it return new array 
// splice methods is mutable methods this mutate the orignal array 
// in splice methods basically we use splice(start,delete count , add element )

const fruits = ["Apple", "Banana", "Cherry", "Date"]; //array of element

// Extract from index 1 to index 3 (not including 3)
const someFruits = fruits.slice(1, 3); 

console.log(someFruits); // ["Banana", "Cherry"]
console.log(fruits);     // ["Apple", "Banana", "Cherry", "Date"] (Unchanged)

const colors = ["Red", "Green", "Blue"];

// At index 1, remove 1 item and add "Yellow" and "Pink"
const removed = colors.splice(1, 1, "Yellow", "Pink");

console.log(removed); // ["Green"] (The items we cut out)
console.log(colors);  // ["Red", "Yellow", "Pink", "Blue"] (The original is changed!)