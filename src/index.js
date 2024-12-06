import './styles/reset.css';
import './styles/style.css';
import './styles/prod-listing.css';

import { loadProducts } from './js/prod-listing.js';
import { fetchProductsCategories,createCategoryDropdown,setupCategoryFilter,renderProductCard  } from './js/filters.js'

fetchProductsCategories();
createCategoryDropdown();
setupCategoryFilter();
renderProductCard();

loadProducts();

import { addToCart } from './js/addToCart.js';
import { updateCart } from './js/addToCart.js';
import { removeFromCart } from './js/addToCart.js';