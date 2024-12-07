import "./styles/reset.css";
import "./styles/style.css";
import "./styles/prod-listing.css";

import { registerRoute } from "./js/router";

import { addToCart } from "./js/addToCart.js";
import { updateCart } from "./js/addToCart.js";
import { removeFromCart } from "./js/addToCart.js";

// shoppping cart sections
import "./styles/shop-cart.css";
import "./js/shop-cart.js";
import { openCart } from "./js/shop-cart.js";

registerRoute();

async function test() {
  const openCartButton = document.getElementById("sc-open-button");

  openCartButton.addEventListener("click", () => {
    openCart();
    console.log("open cart");
  });
}

test();