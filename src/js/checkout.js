import "../styles/checkout-style.css"
import { cart } from "./addToCart";

//This function displays the current CART including the item amount and prices
export async function renderCart() {
	const cartEl = document.querySelector("#checkout-cart");
	let cartAmount = 0;
	for (let i = 0; i < cart.length; i++) {
		cartAmount += cart[i].Amount;
		cartEl.innerHTML = `<h1> Cart - items ${cartAmount} </h1>`;
	}

	const checkoutItems = document.querySelector("#checkout-items");
	//This loops through the shopping cart array and renders out their images, names and total prices (calculated by the price * the Amount)
	
	//add eventlisteners for shipping
	document.querySelector("#checkout-shipping").addEventListener("click", () => {
		calculateTotalPrice()
	})

	//add eventlisteners for payment options
	//maybe now?
	document.querySelector("#checkout-payment").addEventListener("click", () => {
		togglePayment(document.querySelector("#checkout-payment").value)
	})

	for (let i = 0; i < cart.length; i++) {
		const item = document.createElement("div");
		item.classList.add("product")
		item.innerHTML = `
        <img src="${cart[i].image}" class="checkout-product-img">
		<p>${cart[i].price}</p>
        <h3>${cart[i].title}</h3>
        <h3 class="amount">${cart[i].Amount}</h3>
		<h3>${Math.round(cart[i].price * cart[i].Amount * 100) / 100}$</h3>
        `;
		checkoutItems.appendChild(item);
	}
	calculateTotalPrice();
	//calculateItemAmount();
}

//This calculates and renders out the total price of all items in the cart
export async function calculateTotalPrice() {
	let checkoutSum = 0;
	let shippingPrice = document.querySelector("#checkout-shipping").value;
	for (let i = 0; i < cart.length; i++) {
		checkoutSum += cart[i].price * cart[i].Amount;
	}
	let totalPrice = checkoutSum + Number(shippingPrice);
	renderTotalPrice(totalPrice)
}

export async function renderTotalPrice(totalPrice) {
	const shippingEl = document.querySelector("#checkout-shipping-cost");
	const orderSummary = document.querySelector("#checkout-order-summary");
	const totalEL = document.querySelector("#checkout-total-price");
	shippingEl.textContent = `Shipping: ${
		document.querySelector("#checkout-shipping").value
	}$`;
	if (cart.length === 0) {
		console.log("You have nothing in your cart bozo")
		 orderSummary.innerHTML = `<h1> You don't have any items in your cart:( </h1>`;
		/* document.querySelector("#checkout-form-section").innerHTML = ""; */
	}
	totalEL.textContent = `Total: ${totalPrice.toFixed(2)}$`;
}

export async function togglePayment(decider) {
	if (decider == 0) {
		document.querySelector("#checkout-credit-card").style.display = "none"
		document.querySelector("#checkout-paypal").style.display = "grid"
		console.log("true")
	} else {
		document.querySelector("#checkout-credit-card").style.display = "grid"
		document.querySelector("#checkout-paypal").style.display = "none"
		console.log("false")
	}
}

window.onload(renderCart)