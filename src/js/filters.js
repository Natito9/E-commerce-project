import "../styles/filters.css";
import { fetchProducts } from "./api";

export async function fetchProductsCategories() {
  let products = await fetchProducts();
  // Extract unique categories
  let categories = [...new Set(products.map((product) => product.category))];
  return categories;
}

export async function createCategoryDropdown() {
  let categories = await fetchProductsCategories();

  // Create the dropdown element
  let dropdown = document.createElement("select");
  dropdown.id = "category-filter";

  // Add "All Categories" as the default option
  let allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All Categories";
  dropdown.appendChild(allOption);

  // Add categories to the dropdown
  categories.forEach((category) => {
    let option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    dropdown.appendChild(option);
  });

  // Append the dropdown to the DOM
  document.getElementById("filter-container").appendChild(dropdown);
}

export function setupCategoryFilter() {
  // Fetch products and categories
  fetchProducts()
    .then((products) => {
      // Render all products initially
      let productList = document.getElementById("product-list");
      productList.innerHTML = ""; // Clear the existing product list
      products.forEach((product) => renderProductCard(product)); // Render all products

      // Add the event listener for filtering by category
      document
        .getElementById("filter-container")
        .addEventListener("change", (event) => {
          let selectedCategory = event.target.value;

          // Filter the products based on the selected category
          let filteredProducts =
            selectedCategory === "all"
              ? products
              : products.filter(
                  (product) => product.category === selectedCategory
                );

          // Clear the product list and reload with filtered products
          productList.innerHTML = ""; // Clear the existing product list
          filteredProducts.forEach((product) => renderProductCard(product)); // Render filtered products
        });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

export function renderProductCard(product) {
  // Get the container where products will be listed
  let container = document.getElementById("product-list");

  // Create the HTML structure for the product card
  let card = `
        <div class="card">
            <h4>${product.title}</h4>
            <img src="${product.image}" alt="${product.title}" class="product-image" />
            <p class="price">Price: $${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;

  // Append the product card to the product list container
  container.innerHTML += card;
}
