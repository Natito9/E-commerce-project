
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      // Increase the amount if the product is already in the cart
      cart[existingProductIndex].Amount += 1;
    } else {
      // Add the product to the cart with amount 1
      cart.push({ ...product, Amount: 1 });
    }
  
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Update cart counter (Optional)
    updateCartCounter();
  }

  // Update the cart counter (show how many items are in the cart)
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = cart.reduce((total, item) => total + item.Amount, 0);
  }
