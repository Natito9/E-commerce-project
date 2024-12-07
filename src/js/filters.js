import "../styles/filters.css";
import { fetchProducts } from "./api";

export async function fetchProductsCategories() {
  const products = await fetchProducts();
  // Extract unique categories by using 'new Set' to remove duplicates and using the spread operator ([...Set]) to convert it back into an array
  const categories = [...new Set(products.map((product) => product.category))];
  return categories;
}

export async function createCategoryDropdown() {
  const categories = await fetchProductsCategories();

  // Create the dropdown element
  const dropdown = document.createElement("select");
  dropdown.id = "filter-category";

  // Add "All Categories" as the default option
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All Categories";
  dropdown.appendChild(allOption);

  // Add categories to the dropdown
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    dropdown.appendChild(option);
  });

  // Append the dropdown to the DOM
  document.getElementById("filter-container").appendChild(dropdown);
}


export function setupCategoryFilter() {
    fetchProducts()
        .then((products) => {
            // Add the event listener for filtering by category
            document
                .getElementById("filter-container")
                .addEventListener("change", (event) => {
                    const selectedCategory = event.target.value;

                    // Filter the products based on the selected category
                    const filteredProducts =
                        selectedCategory === "all"
                            ? products
                            : products.filter(
                                (product) => product.category === selectedCategory
                              );

                    // Clear the product list and reload with filtered products
                    const productList = document.getElementById("product-list");
                    productList.innerHTML = ""; 
                    filteredProducts.forEach((product) => renderProductCard(product)); 
                });
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
}

export function renderProductCard(product) {
  const container = document.getElementById("product-list");

  const card = `
        <div class="card">
            <h4>${product.title}</h4>
            <img src="${product.image}" alt="${product.title}" class="product-image" />
            <p class="price">Price: $${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
  container.innerHTML += card;
}
