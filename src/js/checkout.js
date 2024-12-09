import "../styles/checkout-style.css"

//this is necessary for the checkout page DOM manipulation
const orderSummary = document.querySelector("#checkout-order-summary");
const shippingEl = document.querySelector("#checkout-shipping-cost");
const totalEL = document.querySelector("#checkout-total-price");
const cartEl = document.querySelector("#checkout-cart");
const checkoutItems = document.querySelector("#checkout-items");
/* const whiteShirt = {
	title: "White Shirt",
	price: 149.99,
	img: "https://tse4.mm.bing.net/th?id=OIP.sPKwzWU7SRDhgGDV_xjE3wAAAA&pid=Api",
	//If there is not an "Amount" value in the API we need to manually set it to 0 when we've fetched the necessary data from the API
	//If Amount > 0 the code will add the responding item from the "items" array to the "cart" array
	Amount: 1,
};

const blackPants = {
	title: "Black Pants",
	price: 399.99,
	img: "https://tse1.mm.bing.net/th?id=OIP.mTvA62qA5btxjDX6NYlh-QHaJa&pid=Api",
	//see above
	Amount: 2,
};

//This is the array which represents the shopping cart
let cart = [whiteShirt, blackPants];
export {cart}
 */

//This function displays the current CART
export async function renderCart() {
	checkoutItems.innerHTML = ``;
	//This loops through the shopping cart array and renders out their images, names and total prices (calculated by the price * the Amount)
	for (i = 0; i < cart.length; i++) {
		const item = document.createElement("div");
		item.classList.add("product")
		item.innerHTML = `
        <img src="${cart[i].img}" class="checkout-product-img">
		<p>${cart[i].price}</p>
        <h3>${cart[i].title}</h3>
		<div class="amounter">
        <button onclick="remove(${i})" class="minus-btn">-</button>
        <h3 class="amount">${cart[i].Amount}</h3>
        <button onclick="add(${i})" class="plus-btn">+</button>
        </div>
		<h3>${Math.round(cart[i].price * cart[i].Amount * 100) / 100}kr</h3>
        `;
		checkoutItems.appendChild(item);
	}
	calculateTotalPrice();
	calculateItemAmount();
	console.log("HERE I AM")
}

//This calculates and renders out the total price of all items in the cart
export async function calculateTotalPrice() {
	let checkoutSum = 0;
	let shippingPrice = document.querySelector("#checkout-shipping").value;
	for (i = 0; i < cart.length; i++) {
		checkoutSum += cart[i].price * cart[i].Amount;
	}
	let totalPrice = checkoutSum + Number(shippingPrice);
	renderTotalPrice(totalPrice)
}

export async function renderTotalPrice(totalPrice) {
	shippingEl.textContent = `Shipping: ${
		document.querySelector("#checkout-shipping").value
	}kr`;
	if (cart.length === 0) {
		orderSummary.innerHTML = `<h1> You don't have any items in your cart:( </h1>`;
		document.querySelector("#checkout-form-section").innerHTML = "";
	}
	totalEL.textContent = `Total: ${totalPrice.toFixed(2)}kr`;
}

//This calculates and renders the total amount of items in the cart
export function calculateItemAmount() {
	let cartAmount = 0;
	for (i = 0; i < cart.length; i++) {
		cartAmount += cart[i].Amount;
		cartEl.innerHTML = `<h1> Cart – items ${cartAmount} </h1>`;
	}
}

//This decreases the "Amount"-value by to the responding item from the cart OR removes the item from the array alltogether if the "Amount"-value hits 0
//This function is called by a button added in the renderCart function; the corresponding button does not exist in the html
/* function remove(index) {
	if (cart[index].Amount === 1) {
		cart.splice(index, 1);
	} else {
		cart[index].Amount -= 1;
	}
	renderCart();
} */

//This increases the "Amount"-value by one to the responding item
//This function is called by a button added in the renderCart function; the corresponding button does not exist in the html
/* function add(index) {
	cart[index].Amount += 1;
	renderCart();
}

// renderCart();

//natalias change not so important right now
export function getCartItemIndex(index) {
    return index;
}

