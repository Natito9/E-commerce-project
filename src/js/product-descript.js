import { addToCart } from "./addToCart";


// IMPORT STYLES:
import "../styles/product-descript.css";

let productsArray = [];
export async function openProductModal(productId) {

	const productPopUp = document.querySelector("#product-descript-container");
	productPopUp.showModal();
  
	// fetch product data from api
	    const products = localStorage.getItem("products")
      
      productsArray = JSON.parse(products)
      let product = productsArray.find(e => e.id === productId)

	const productImage = productPopUp.querySelector("img");
	productImage.src = product.image;
	productImage.alt = product.title;

	const productPrice = productPopUp.querySelector(".price");
	productPrice.textContent = `Price: $${product.price}`;

	const productDescript = productPopUp.querySelector(".description");
	productDescript.textContent = product.description;


	productPopUp
		.querySelector("button.add-to-cart")
		.addEventListener("click", (e) => {
			e.preventDefault();
      //VERY IMPORTANT TO KEEP THIS AS ADDTOCART OTHERWISE MORE THAN ONE OF THE PRODUCT IS ADDED TO THE CART
			addToCart(product);
      console.log(product)
      
		});

	productPopUp
		.querySelector("button.close-btn")
		.addEventListener("click", (e) => {
			e.preventDefault();
			productPopUp.close();
		});
	
}
