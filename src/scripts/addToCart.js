// Cart array to hold products
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
  cart.push(product);
  updateCart();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

// Function to update the cart display
function updateCart() {
  let cartItemsList = document.getElementById("cart-items-list");
  cartItemsList.innerHTML = "";  // Clear the current cart items

  cart.forEach(item => {
    let listItem = document.createElement("li");
    listItem.classList.add("cart-item");

    // Add product details
    listItem.innerHTML = `
      <span>${item.title}</span>
      <div class="remove-dropdown">
        <button>Options</button>
        <div class="remove-dropdown-content">
          <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    `;

    cartItemsList.appendChild(listItem);
  });

  // Update cart counter
  document.getElementById("cart-counter").textContent = cart.length;
}
