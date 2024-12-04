// let previewContainer = document.querySelector('.product-descript-preview');
// let previewBox = previewContainer.querySelectorAll('.product-descript-item');

// document.querySelectorAll('. -->INSERT CLASS FROM PROD.LIST RAANA<--').forEach(product =>{
    // })
//_____________________________________________________________________FIRST VERSION YOUTUBE


// FUNCTION TO FETCH PRODUCTS FROM THE API

import './styles/product-descript.css';


// FUNCTION TO CREATE A PRODUCT CARD
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-descript-card';
    /*card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product-image">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      <button class="buy-now" data-id="${product.id}">Buy now</button>
    `; */
    return card;
  }



// FUNCTION TO RENDER PRODUCT CARDS
async function renderProductCards() {
    const productDescriptContainer = document.getElementById('product-descript-container');
    const products = await fetchProducts();
  
    products.forEach(product => {
      const card = createProductCard(product);
      productDescriptContainer.appendChild(card);
    });
  
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', addToCart);
    });

    // Add event listeners to "Buy now" buttons
    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', buyNow);
      });

  }

  renderProductCards();


// FUNCTION TO HANDLE ADDING A PRODUCT TO THE CART