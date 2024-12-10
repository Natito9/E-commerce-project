import "../styles/prod-listing.css";
import { fetchProducts } from "./api.js";
import { openProductModal } from "./product-descript.js";
import { addToCart } from "./addToCart.js";
import {
	fetchProductsCategories,
	createCategoryDropdown,
	setupCategoryFilter,
} from "./filters.js";

export async function loadHomeScreen(params) {
	loadProducts();
	fetchProductsCategories();
	createCategoryDropdown();
	setupCategoryFilter();
}

export async function loadProducts() {
	// Show loading spinner
	document.getElementById("loading-spinner").style.display = "block";

	let result = await fetchProducts();
	let container = document.getElementById("product-list");

	result.forEach((element) => {
		let card = `
        <div class="card" data-id="${element.id}">         
            <h4 class="pi" data-id="${element.id}">${element.title}</h4>
            <img
                src="${element.image}"
                alt="${element.title}"
                class="product-image"
                data-id="${element.id}"
            />
            <p class="price" data-id="${element.id}">Price: $${element.price}</p>
            <button class="add-to-cart" data-id="${element.id}" data-id="${element.id}">Add to Cart</button>
        </div>`;
		container.innerHTML += card;
	});

	//Add event listener to the 'add to cart' button
	//Hello Sixten here KEEP THIS VERSION OF THE CODE IF YOU GET ANY CONFLICTS
	document
		.getElementById("product-list")
		.addEventListener("click", function (event) {
			const productId = Number(event.target.getAttribute("data-id"));
			if (event.target.classList.contains("add-to-cart")) {
				const product = result.find((item) => item.id === parseInt(productId));
				if (product) {
					addToCart(product);
				}
			} else if (
				event.target.classList.contains("card") ||
				event.target.classList.contains("pi") ||
				event.target.classList.contains("product-image") ||
				event.target.classList.contains("price")
			) {
				openProductModal(productId);
				console.log(productId);
			} else {
				console.log("Er");
			}
		});

	// Hide loading spinner
	document.getElementById("loading-spinner").style.display = "none";

	//Save fetched items to localstorage
	localStorage.setItem("products", JSON.stringify(result));
}
