// Cart array to hold products
let cart = [];

// Function to load cart from local storage
export function loadCart() {
	// Check if there is a cart in localStorage
	const savedCart = localStorage.getItem("cart");
	if (savedCart) {
		cart = JSON.parse(savedCart); // Parse and load cart from localStorage
		updateCart(); // Update the display
	}
}

// Function to add a product to the cart
export function addToCart(product) {
	if (product.Amount === 0) {
		cart.push(product);
		product.Amount += 1;
		console.log("added it to the cart");
	} else {
		product.Amount += 1;
		console.log("added another one to the cart");
	}
	updateCart();
	console.log(cart);
}

// Function to remove a product from the cart
export function removeFromCart(productId) {
	cart = cart.filter((item) => item.id !== productId);
	updateCart();
}

// Function to update the cart display
export function updateCart() {
	let cartItemsList = document.getElementById("cart-items-list");
	cartItemsList.innerHTML = ""; // Clear the current cart items

	cart.forEach((item) => {
		let listItem = document.createElement("li");
		listItem.classList.add("cart-item");

		// Add product details
		listItem.innerHTML = `
      <span class="remove-spn">${item.title}
        <div class="remove-dropdown">
            <button onclick="removeFromCart(${item.id})">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>         
        </div>
      </span>
    `;

		cartItemsList.appendChild(listItem);
	});

	// Update cart counter based on total "Amount"-value
  let amountOfItems = 0;
	for (let i = 0; i < cart.length; i++) {
    amountOfItems += cart[i].Amount
  }
  document.getElementById("cart-counter").textContent = amountOfItems;

	// Save the updated cart to localStorage
	localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = loadCart;
