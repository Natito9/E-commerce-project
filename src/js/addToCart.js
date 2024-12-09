let cart = [];
export { cart };

// Function to load cart from local storage
export function loadCart() {
	// Check if there is a cart in localStorage
	const savedCart = localStorage.getItem("cart");
	if (savedCart) {
		cart = JSON.parse(savedCart); // Parse and load cart from localStorage
		// updateCart(); 
		console.log("Current cart contents:", cart); 
	}
}

// Function to add a product to the cart
export async function addToCart(product) {
    if (!cart.some(e => e.id === product.id)) {
        cart.push(product);
        product.Amount += 1; 
        console.log("that thing is not there, but it is now");
    } else {
        cart.find(e => e.id === product.id).Amount += 1
        console.log("that thing is there, and now there are one more of it")
    }
    updateCart();
    console.log(cart)
}
//Function to remove a product from the cart
export function removeFromCart(productId) {
	cart = cart.filter((item) => item.id !== productId);
	updateCart();
}

//Function to update the cart display
export function updateCart() {
  const cartItemsList = document.getElementById("cart-items-list");
	cartItemsList.textContent = ""; // Clear the current cart items

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

	//Update cart counter based on total "Amount"-value
  let amountOfItems = 0;
	for (let i = 0; i < cart.length; i++) {
    amountOfItems += cart[i].Amount
  }
  document.getElementById("cart-counter").textContent = amountOfItems;

	// Save the updated cart to localStorage
	localStorage.setItem("cart", JSON.stringify(cart));
}




window.onload = loadCart;
