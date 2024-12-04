export async function fetchProducts() {
    // Show loading spinner
    document.getElementById("loading-spinner").style.display = "block";

    //fetch all the products from API
    const apiUrl = 'https://fakestoreapi.com/products';

    try {
        const response = await fetch(apiUrl);
        const products = await response.json();

    //Add the key "Amount" to the API objects 
        const key = "Amount";
        for (let i = 0; i < products.length; i++){
            products[i][key] = 0;
        }
        document.getElementById("loading-spinner").style.display = "none";
        return products;

    } catch(error){
        console.error('Error fetching products:',error);
        return [];
    }
    
};

let result = await fetchProducts();
let container = document.getElementById("product-list");

result.forEach(element => {    
    let truncatedDescription = element.description.length > 30 
        ? element.description.substring(0, 100) + "..." 
        : element.description;

    let card = `<div class="card">         
    <h4>Fjallraven - Foldsack No. 1 Backpack</h4>
    <img
      src="${element.image}"
      alt="Fjallraven - Foldsack No. 1 Backpack"
      class="product-image"
    />
    <p class="description">
      ${truncatedDescription}
    </p>
    <p class="price">Price: $${element.price}</p>
    <p class="rating">Rating: ${element.rating.rate} (${element.rating.count} reviews)</p>
    <p class="category">Category: ${element.category}</p>
    <button class="add-to-cart" data-id="${element.id}">Add to Cart</button>
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
  </div>      
</div>`;
  container.innerHTML += card;  
});


  document.getElementById("product-list").addEventListener("click", function(event) {
    if (event.target.classList.contains('add-to-cart')) {
      const productId = event.target.getAttribute('data-id');
      const product = result.find(item => item.id === parseInt(productId));
      if (product) {
        addToCart(product);
      }
    }
  });