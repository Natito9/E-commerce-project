import '../styles/filters.css';
import { fetchProducts } from "./api";

export async function fetchProductsCategories(params) {
    let products = await fetchProducts();
    console.log(products);
}
