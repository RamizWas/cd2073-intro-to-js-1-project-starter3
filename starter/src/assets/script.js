
let totalPaid = 0;
const products = [
  {
    name: 'Cherry',
    price: 2,
    quantity: 0,
    productId: 1,
    image: './images/cherry.jpg',
  },
  {
    name: 'Orange',
    price: 1,
    quantity: 0,
    productId: 2,
    image: './images/orange.jpg',
  },
  {
    name: 'Strawberry',
    price: 3,
    quantity: 0,
    productId: 3,
    image: './images/strawberry.jpg',
  },
];

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
let paid = 0;

function addProductToCart(productId) {
  const productIndex = cart.findIndex(item => item.productId === productId);
  const product = products.find(item => item.productId === productId);

  if (productIndex !== -1) {
    // If the product is already in the cart, increase its quantity

    product.quantity = product.quantity + 1;
    console.log(products);
    cart[productIndex].quantity += 1;
  } else {
    console.log("product does not exist");
    // If the product is not in the cart, find it in the products array


    if (product) {
      console.log("editing quantity");
      // Add the product to the cart with a quantity of 1
      product.quantity = product.quantity + 1;
      console.log(products)

      const addedProduct = { ...product, quantity: 1 };
      cart.push(addedProduct);
      console.log(cart);
    }
  }

  // Find the updated product in the cart
  const updatedProduct = cart.find(item => item.productId === productId);
  totalPaid = 0;

  // Return the updated product and cart as an object
  return { updatedProduct, cart: [...cart] };
}


function increaseQuantity(productId) {
  // Find the index of the product with the given productId in the cart
  const productIndex = cart.findIndex(item => item.productId === productId);
  const product = products.find(item => item.productId === productId);

  if (productIndex !== -1) {
    // If the product is in the cart, increase its quantity
    product.quantity = product.quantity + 1;
    cart[productIndex].quantity += 1;
  }
}

function decreaseQuantity(productId) {
  // Find the index of the product with the given productId in the cart
  const productIndex = cart.findIndex(item => item.productId === productId);
  const product = products.find(item => item.productId === productId);

  if (productIndex !== -1) {
    // If the product is in the cart, decrease its quantity by 1
    cart[productIndex].quantity -= 1;
    product.quantity = product.quantity - 1;

    // If the quantity reaches 0, remove the product from the cart
    if (cart[productIndex].quantity === 0) {
      cart.splice(productIndex, 1);
    }
  }
}


function removeProductFromCart(productId) {
  // Find the index of the product with the given productId in the cart
  const productIndex = cart.findIndex(item => item.productId === productId);
  const product = products.find(item => item.productId === productId);

  if (productIndex !== -1) {
    product.quantity = 0;
    // Set the quantity of the product to 0
    cart[productIndex].quantity = 0;

    // Remove the product from the cart
    cart.splice(productIndex, 1);
  }
}


function cartTotal() {
  // Initialize a variable to hold the total
  let total = 0;

  // Iterate through the cart and sum up the product prices multiplied by their quantities
  for (const item of cart) {
    total += item.price * item.quantity;
  }

  return total;
}

function emptyCart() {
  // Set the cart to an empty array
  cart.length = 0;
}


function pay(amount) {
  // Calculate the remaining balance or change
  totalPaid += amount;

  let balance = totalPaid - cartTotal();


  if (balance >= 0) {
    
    emptyCart();
    
    console.log("empty")
  }
  return balance;
}




module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
