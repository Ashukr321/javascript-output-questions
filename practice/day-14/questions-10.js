array.reduce((accumulator, currentValue, index, array) => {
  // return updated accumulator
}, initialValue);


const arr = [[1, 2], [3, 4], [5]];

const flat = arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // [1, 2, 3, 4, 5]


const nestedArr = [1, [2, [3, 4], 5], [6, 7], 8];

const flatten = (arr) => 
  arr.reduce((acc, curr) => 
    Array.isArray(curr) 
      ? acc.concat(flatten(curr))  // recursively flatten
      : acc.concat(curr),
    []
  );

const flat = flatten(nestedArr);
console.log(flat); // [1, 2, 3, 4, 5, 6, 7, 8]
