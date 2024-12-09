import './styles/reset.css';
import './styles/style.css';
import './styles/prod-listing.css'
import './styles/footer.css'
import './styles/header.css'

import { registerRoute } from "./js/router";

import { addToCart } from "./js/addToCart.js";
import { updateCart } from "./js/addToCart.js";
import { removeFromCart } from "./js/addToCart.js";

registerRoute();
