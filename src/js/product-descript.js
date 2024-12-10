// IMPORTED FUNCTIONS
import { fetchSingleProduct } from "./api";
import { addToCart } from "./addToCart";
import { addItemToCart } from "./shop-cart";
import {calculateItemAmount} from "./shop-cart"

// IMPORT STYLES:
import "../styles/product-descript.css";

let productsArray = [];
export async function openProductModal(productId) {
  // open product dialog
	const productPopUp = document.querySelector("#product-descript-container");
	productPopUp.showModal();
  
	// fetch product data from api
	    const products = localStorage.getItem("products")
      
      productsArray = JSON.parse(products)
      let product = productsArray.find(e => e.id === productId)

      // replace inner html
	// productPopUp.innerHTML = createProductCard(product)
	const productImage = productPopUp.querySelector("img");
	productImage.src = product.image;
	productImage.alt = product.title;

	const productPrice = productPopUp.querySelector(".price");
	productPrice.textContent = `Price: $${product.price}`;

	const productDescript = productPopUp.querySelector(".description");
	productDescript.textContent = product.description;

	// add event listener for add to cart button (copy from Raana)
	productPopUp
		.querySelector("button.add-to-cart")
		.addEventListener("click", (e) => {
			e.preventDefault();
      //VERY IMPORTANT TO KEEP THIS AS ADDTOCART AND NOT ADDITEMTOCART SINCE OTHERWISE MORE THAN ONE OF THE PRODUCT IS ADDED TO THE CART
			addToCart(product);
      console.log(product)
      
		});

	// add event listener for close button
	productPopUp
		.querySelector("button.close-btn")
		.addEventListener("click", (e) => {
			e.preventDefault();
			productPopUp.close();
		});
	//console.log(result);
}
