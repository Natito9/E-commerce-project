import './styles/reset.css';
import './styles/style.css';
import './styles/prod-listing.css'

import { loadProducts } from './js/prod-listing.js';
import { registerRoute } from './js/router';

import { addToCart } from './js/addToCart.js';
import { updateCart } from './js/addToCart.js';
import { removeFromCart } from './js/addToCart.js';

registerRoute();
loadProducts();
