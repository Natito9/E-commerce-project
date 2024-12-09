import { fetchProducts } from "./api.js";
import { openProductModal } from "./product-descript.js";
import { addToCart } from "./addToCart.js";
import { removeFromCart } from "./addToCart.js";


export async function loadProducts() {
  // Show loading spinner
  document.getElementById("loading-spinner").style.display = "block";

  let result = await fetchProducts();
  let container = document.getElementById("product-list");

  result.forEach((element) => {
    let card = `
        <div class="card" data-id="${element.id}">         
            <h4>${element.title}</h4>
            <img
                src="${element.image}"
                alt="${element.title}"
                class="product-image"
            />
            <p class="price">Price: $${element.price}</p>
            <button class="add-to-cart" data-id="${element.id}" >Add to Cart</button>
        </div>`;
    container.innerHTML += card;
  });

  //Add event listener to the 'add to cart' button
  //Hello Sixten here I've updated this function so "add to cart"-button doesn't open the pop up, please choose this version if you get any conflicts
  document
    .getElementById("product-list")
    .addEventListener("click", function (event) {
      const productId = event.target.getAttribute("data-id");
      if (event.target.classList.contains("add-to-cart")) {
        const product = result.find((item) => item.id === parseInt(productId));
        if (product) {
          addToCart(product);
        }
      } else {
        openProductModal(productId)
      }
    });

  // Hide loading spinner
  document.getElementById("loading-spinner").style.display = "none";


}