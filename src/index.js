import './styles/reset.css';
import './styles/style.css';
import './styles/prod-listing.css'

import { registerRoute } from './js/router';

import { addToCart } from './js/addToCart.js';
import { updateCart } from './js/addToCart.js';
import { removeFromCart } from './js/addToCart.js';

// shoppping cart section files
import './styles/shop-cart.css';
import './js/shop-cart.js';


// import {displayCartContent} from './shop-cart.js';

// displayCartContent();

import {openCart} from './js/shop-cart.js';



registerRoute();
