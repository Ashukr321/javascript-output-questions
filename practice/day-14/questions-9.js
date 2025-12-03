const products = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1000 }
];

// Initialize cart
let cart = [];

// Add to cart function
function addToCart(prdId) {
  // Find product in products list
  const product = products.find(item => item.id === prdId);

  if (!product) return cart; // product not found

  // Check if product already exists in cart
  const existing = cart.find(item => item.id === prdId);

  if (existing) {
    // Increase quantity
    cart = cart.map(item =>
      item.id === prdId ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    // Add new product with quantity 1
    cart = [...cart, { ...product, quantity: 1 }];
  }

  return cart;
}

// Test
console.log(addToCart(2)); // Adds Mouse
console.log(addToCart(1)); // Adds Laptop
console.log(addToCart(2)); // Increases Mouse quantity
