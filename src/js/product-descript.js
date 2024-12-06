
// IMPORTED FUNCTIONS
import { fetchSingleProduct } from "./api";
import { addToCart } from "./addToCart";

// IMPORT STYLES!


export async function openProductModal(productId) {
  // open product dialog
  const productPopUp = document.querySelector("#product-descript-container");
  productPopUp.showModal()

  // fetch product data from api
  const product = await fetchSingleProduct(productId)
  // replace inner html
  // productPopUp.innerHTML = createProductCard(product)
  const productImage = productPopUp.querySelector("img")
  productImage.src = product.image

  const productPrice = productPopUp.querySelector(".price")
  productPrice.textContent = product.price

  const productDescript = productPopUp.querySelector(".description")
  productDescript.textContent = product.description

  // add event listener for add to cart button (copy from Raana)
  productPopUp.querySelector("button.add-to-cart").addEventListener("click", (e) => {
    e.preventDefault()
    addToCart(product)
  })

  // add event listener for close button
  productPopUp.querySelector("button.close-btn").addEventListener("click", (e) => {
    e.preventDefault()
    productPopUp.close()

  })

}





