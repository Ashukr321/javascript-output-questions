// reduced methods of array 

const arr = [1,2,3,4,5];

const calllback=(acc,curr)=>{
    return acc+curr;
}
const  sum  = arr.reduce((calllback),0)
console.log(sum);

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
];

const groupedUser = users.reduce((acc,curr)=>{
    const r= curr.role;
    if(!acc[r]){
        acc[r]=[];
    }
    acc[r].push(curr);
    return acc;
},{});

console.log(groupedUser);

// keep in mind when ever we are using reduce methods we have to retunr accumulator value 