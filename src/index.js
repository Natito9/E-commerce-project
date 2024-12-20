import './styles/reset.css';
import './styles/style.css';
import './styles/prod-listing.css'
import './styles/footer.css'
import './styles/header.css'
import './styles/checkout-style.css'

import { registerRoute } from "./js/router";

import { addToCart } from "./js/addToCart.js";
import { updateCart } from "./js/addToCart.js";
import { removeFromCart } from "./js/addToCart.js";

// shoppping cart sections
import "./styles/shop-cart.css";
import "./js/shop-cart.js";
import { openCart } from "./js/shop-cart.js";
import { backToHome } from './js/backToHome.js';
backToHome()
registerRoute();

