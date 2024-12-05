import './styles/reset.css';
import './styles/style.css';
import './styles/prod-listing.css';

import { loadProducts } from './js/prod-listing.js';
import { fetchProductsCategories } from './js/filters.js'


import { addToCart } from './js/addToCart.js';
import { updateCart } from './js/addToCart.js';
import { removeFromCart } from './js/addToCart.js';

loadProducts();
fetchProductsCategories();

