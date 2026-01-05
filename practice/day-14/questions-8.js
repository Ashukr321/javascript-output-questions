const cart = [
  { id: 1, name: "Laptop", price: 45000, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 2 },
  { id: 3, name: "Keyboard", price: 1000, quantity: 1 }
];

// array of items in cart 

 const totalPrice = cart.reduce((sum,item)=>{
    return sum+item
 },0)