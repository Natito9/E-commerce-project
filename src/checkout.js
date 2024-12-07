//this is necessary for the checkout page DOM manipulation
const orderSummary = document.querySelector("#checkout-order-summary");
const shippingEl = document.querySelector("#checkout-shipping-cost");
const totalEL = document.querySelector("#checkout-total-price");
const cartEl = document.querySelector("#checkout-cart");
const checkoutItems = document.querySelector("#checkout-items");
const whiteShirt = {
	title: "White Shirt",
	price: 149.99,
	img: "https://tse4.mm.bing.net/th?id=OIP.sPKwzWU7SRDhgGDV_xjE3wAAAA&pid=Api",
	//If there is not an "amount" value in the API we need to manually set it to 0 when we've fetched the necessary data from the API
	//If amount > 0 the code will add the responding item from the "items" array to the "cart" array
	amount: 1,
};

const blackPants = {
	title: "Black Pants",
	price: 399.99,
	img: "https://tse1.mm.bing.net/th?id=OIP.mTvA62qA5btxjDX6NYlh-QHaJa&pid=Api",
	//see above
	amount: 2,
};

//This is the array which represents the shopping cart
let cart = [whiteShirt, blackPants];

//This function displays the current CART (not the buyable items) on the checkout page
function renderCart() {
	checkoutItems.innerHTML = ``;
	//This loops through the shopping cart array and renders out their images, names and total prices (calculated by the price * the amount)
	for (i = 0; i < cart.length; i++) {
		const item = document.createElement("div");
		item.innerHTML = `
        <h2>${cart[i].title}</h2>
        <h2>${Math.round(cart[i].price * cart[i].amount * 100) / 100}kr</h2>
        <h2>Amount: ${cart[i].amount}</h2>
        <img src="${cart[i].img}" class="checkout-product-img">
        <button onclick="remove(${i})">-</button>
        
        <button onclick="add(${i})">+</button>
        `;
		checkoutItems.appendChild(item);
	}
	calculateTotalPrice();
	calculateItemAmount();
}

//This calculates and renders out the total price of all items in the cart
function calculateTotalPrice() {
	let checkoutSum = 0;
	let shippingPrice = document.querySelector("#checkout-shipping").value
	Number(shippingPrice)
	totalEL.textContent = "Price: ";
	shippingEl.textContent = `Shipping: ${
		document.querySelector("#checkout-shipping").value
	}kr`;
	for (i = 0; i < cart.length; i++) {
		checkoutSum += cart[i].price * cart[i].amount
	}
	let totalPrice = checkoutSum + Number(shippingPrice)
	totalEL.textContent = `Total: ${
		totalPrice.toFixed(2)
	}kr`;
	if (cart.length === 0) {
		orderSummary.innerHTML = `<h1> You don't have any items in your cart:( </h1>`;
		document.querySelector("#checkout-form-section").innerHTML = "";
	}
}

//This calculates and renders the total amount of items in the cart
function calculateItemAmount() {
	let cartAmount = 0;
	for (i = 0; i < cart.length; i++) {
		cartAmount += cart[i].amount;
		cartEl.innerHTML = `<h1> Cart – items ${cartAmount} </h1>`;
	}
}

//This decreases the "amount"-value by to the responding item from the cart OR removes the item from the array alltogether if the "amount"-value hits 0
//This function is called by a button added in the renderCart function; the corresponding button does not exist in the html
function remove(index) {
	if (cart[index].amount === 1) {
		cart.splice(index, 1);
	} else {
		cart[index].amount -= 1;
	}
	calculateTotalPrice();
	calculateItemAmount();
	renderCart();
}

//This increases the "amount"-value by one to the responding item
//This function is called by a button added in the renderCart function; the corresponding button does not exist in the html
function add(index) {
	cart[index].amount += 1;
	calculateTotalPrice();
	calculateItemAmount();
	renderCart();
}

renderCart();
