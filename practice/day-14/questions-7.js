const products = [
  { id: 1,  name: "Laptop",      price: 55000 },
  { id: 2,  name: "Headphones",  price: 1500 },
  { id: 3,  name: "Smartphone",  price: 32000 },
  { id: 4,  name: "Keyboard",    price: 800 },
  { id: 5,  name: "Monitor",     price: 12000 },
  { id: 6,  name: "Mouse",       price: 450 },
  { id: 7,  name: "Smartwatch",  price: 7000 },
  { id: 8,  name: "Camera",      price: 45000 },
  { id: 9,  name: "Printer",     price: 9000 },
  { id: 10, name: "Speaker",     price: 2200 }
];


//  sort by price accending low to high 

const sortedProdccut = [...products].sort((a,b)=>a.price-b.price);
console.log(sortedProdccut);