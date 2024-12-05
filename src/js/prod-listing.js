import { fetchProducts } from "./api.js";
import { addToCart } from "./addToCart.js";
import { removeFromCart } from "./addToCart.js";


export async function loadProducts() {
  // Show loading spinner
  document.getElementById("loading-spinner").style.display = "block";

  let result = await fetchProducts();
  let container = document.getElementById("product-list");

  result.forEach((element) => {
    let card = `
        <div class="card">         
            <h4>${element.title}</h4>
            <img
                src="${element.image}"
                alt="${element.title}"
                class="product-image"
            />
            <p class="price">Price: $${element.price}</p>
            <button class="add-to-cart" data-id="${element.id}" >Add to Cart</button>
            <div class="shine"></div>
            <div class="background">
                <div class="tiles">
                    <div class="tile tile-1"></div>
                    <div class="tile tile-2"></div>
                    <div class="tile tile-3"></div>
                    <div class="tile tile-4"></div>
                    <div class="tile tile-5"></div>
                    <div class="tile tile-6"></div>
                    <div class="tile tile-7"></div>
                    <div class="tile tile-8"></div>
                    <div class="tile tile-9"></div>
                    <div class="tile tile-10"></div>
                </div>
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
            </div>
        </div>`;
    container.innerHTML += card;
  });

  //Add event listener to the 'add to cart' button
  document
    .getElementById("product-list")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("add-to-cart")) {
        const productId = event.target.getAttribute("data-id");
        const product = result.find((item) => item.id === parseInt(productId));
        if (product) {
          addToCart(product);
        }
      }
    });

  // Hide loading spinner
  document.getElementById("loading-spinner").style.display = "none";
}