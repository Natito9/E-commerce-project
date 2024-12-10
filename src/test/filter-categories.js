// This file contains modified versions of the 'fetchProductsCategories' and 'setupCategoryFilter' functions originally defined in filters.js. 

//The modifications enhance testability.

const fetchProducts = require('../js/api').fetchProducts;

async function fetchProductsCategories() {
  const products = await fetchProducts();
  const categories = [...new Set(products.map((product) => product.category))];
  return categories;
}

async function setupCategoryFilter() {
      const products = await fetchProducts();
    
      // Return a function that sets up the event listener
      return (event) => {
        const selectedCategory = event.target.value;
    
        // Filter the products based on the selected category
        const filteredProducts =
          selectedCategory === "all"
            ? products
            : products.filter((product) => product.category === selectedCategory);
    
        // Return filtered products for testing
        return filteredProducts;
      };
    }
module.exports = { fetchProductsCategories,setupCategoryFilter };