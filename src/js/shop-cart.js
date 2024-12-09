import {cart, addToCart} from "./addToCart"; 
import {fetchProducts} from "./api.js";


export async function loadShoppingCart() {
    const openCartButton = document.getElementById("sc-open-button");
  
    openCartButton.addEventListener("click", () => {
      openCart();
    });
}


function openCart(){
    console.log(cart)
    displayCart();
    displayProducts();
}; 


function displayCart() {
    // Create the overlay (background) 
    const scOverlay = document.createElement("div");
    scOverlay.classList.add("cart-overlay");
    document.body.appendChild(scOverlay); //this MIGHT need to be changed

    // Create the section (pop-up cart) 
    const scSection = document.createElement("div");
    scSection.classList.add("shopping-cart-section");
    scOverlay.appendChild(scSection);

    //header container
    const scHeader = document.createElement("div");
    scHeader.classList.add("sc-header-container")
    scSection.appendChild(scHeader);

    //number items container
    const scNumberItems = document.createElement ("div");
    scNumberItems.classList.add("sc-number-items-container")
    scHeader.appendChild(scNumberItems);

    //h2
    const scTitle = document.createElement ("h2")
    scTitle.textContent = "Cart";
    scNumberItems.appendChild(scTitle);

    //cart amount
    const scNumItems = document.createElement ("p")
    scNumItems.id = "productsAmount"
    scNumItems.textContent = "empty cart";
    scNumberItems.appendChild(scNumItems);

    //button container
    const scCloseButtonContainer = document.createElement ("div");
    scCloseButtonContainer.classList.add("sc-close-button-container")
    scHeader.appendChild(scCloseButtonContainer);

    //close button
    const scCloseButton = document.createElement("button");
    scCloseButton.textContent = "";
    scCloseButton.classList.add("sc-close-button");
    scCloseButton.addEventListener("click", closeCart);
    scCloseButtonContainer.appendChild(scCloseButton);

    //line
    const scLineHeader = document.createElement("hr");
    scLineHeader.classList.add("sc-header-line");
    scSection.appendChild(scLineHeader);


    //display the products container
    const scDisplayProductsContainer = document.createElement("div");
    scDisplayProductsContainer.classList.add("sc-products-display-container");
    scDisplayProductsContainer.id = "cart-product-list";
    scSection.appendChild(scDisplayProductsContainer);
    scDisplayProductsContainer.textContent = "no products on your cart";

    //subtotal chekout container
    const scSubtotalCheckoutContainer = document.createElement("div")
    scSubtotalCheckoutContainer.classList.add("sc-subtotal-checkout-container")
    scSection.appendChild(scSubtotalCheckoutContainer);

    //subtotal container
    const scSubtotalContainer = document.createElement("div")
    scSubtotalContainer.classList.add("sc-subtotal-container")
    scSubtotalCheckoutContainer.appendChild(scSubtotalContainer);

    // title subtotal
    const scSubtotalTitle = document.createElement("h3")
    // scSubtotalTitle.classList.add("")
    scSubtotalTitle.textContent = "Subtotal";
    scSubtotalContainer.appendChild(scSubtotalTitle);

    //price
    const scSubtotalPrice = document.createElement("p")
    scSubtotalPrice.classList.add("subtotal-price");
    scSubtotalPrice.textContent = "0 SEK";
    scSubtotalContainer.appendChild(scSubtotalPrice);

    //tax text
    const scSubtotalTaxText = document.createElement("p")
    scSubtotalTaxText.classList.add("sc-subtotal-tax-text")
    scSubtotalTaxText.textContent = "Taxes and shipping are calculated at checkout";
    scSubtotalCheckoutContainer.appendChild(scSubtotalTaxText);

    //checkout button container
    const scCheckoutButtonContainer=document.createElement("div");
    scCheckoutButtonContainer.id = "checkout-form-section";
    scSection.appendChild(scCheckoutButtonContainer);

    //go to checkout button
    const scCheckoutButton=document.createElement("button");
    scCheckoutButton.classList.add("sc-go-to-checkout-button");
    scCheckoutButton.id= "checkoutButton"
    scCheckoutButton.textContent = "Checkout";
    scCheckoutButton.addEventListener('click', changePath);
    scCheckoutButtonContainer.appendChild(scCheckoutButton);

}


export async function displayProducts() {
    const products = cart;
    const productContainer = document.querySelector("#cart-product-list");
    
    if (!productContainer) {
        console.error("Product container not found!"); // debugging
        return;
    }

    productContainer.textContent = ''; 


    products.forEach(product => {
        const productDiv = document.createElement('div');  
        productDiv.classList.add('product-cart');
        
   
        const buttonContainer = createAmountButton(product); 
        productDiv.appendChild(buttonContainer);

        const productTitle = document.createElement("p");
        productTitle.classList.add("product-title-cart");
        productTitle.textContent = ` ${product.title} `;
        productDiv.appendChild(productTitle);

        const productPrice = document.createElement("p");
        productPrice.classList.add("price-cart");
        productPrice.textContent = `$${(product.price * product.Amount).toFixed(2)}`;
        productDiv.appendChild(productPrice);

        productContainer.appendChild(productDiv);
    });

    calculateItemAmount();
    updateSubtotal();
}


function updateSubtotal() {
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.Amount), 0); 
    const scSubtotalPrice = document.querySelector(".subtotal-price");
    if (scSubtotalPrice) {
        scSubtotalPrice.textContent = `${totalPrice.toFixed(1)} USD`; 
    }
}

function calculateItemAmount() {
    const totalAmount = cart.reduce((total, item) => total + item.Amount, 0);
    const scNumberItems = document.querySelector("#productsAmount"); 
    if (scNumberItems) {
        scNumberItems.textContent = totalAmount > 0 ? `${totalAmount} items` : "empty cart";
    }
}


function createAmountButton(product) { 
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "-";
    removeButton.id = "remove-button";
    removeButton.addEventListener("click", () => {
        removeItemFromCart(product);
        amountLabel.textContent = `${product.Amount}`; 
    });
    buttonContainer.appendChild(removeButton); 

    //  add button
    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.id = "add-button";
    addButton.addEventListener("click", () => {
        addItemToCart(product);
        amountLabel.textContent = `${product.Amount}`; 
    });


    const amountLabel = document.createElement("span");
    amountLabel.id = "amount-label";
    amountLabel.textContent = `${product.Amount}`; 
    buttonContainer.appendChild(amountLabel); 
    buttonContainer.appendChild(addButton); 
    return buttonContainer; 
}


export function addItemToCart(product) {
    const existingProduct = cart.find(e => e.id === product.id);
    
    if (existingProduct) {
        existingProduct.Amount += 1; 
    } else {
        const newProduct = { ...product, Amount: 1 };  
        cart.push(newProduct);
    }
    
    displayProducts();
    updateSubtotal();
    calculateItemAmount();
}


function removeItemFromCart(product) {
    const cartItem = cart.find(e => e.id === product.id);
    if (cartItem) {
        if (cartItem.Amount > 1) {
            cartItem.Amount -= 1; 
        } else {
            cart.splice(cart.indexOf(cartItem), 1); //remove if 1
        }

     
        displayProducts();
        updateSubtotal();
        calculateItemAmount();
    } else {
        console.log(`${product.title} not found in cart`);
    }
}


function closeCart() {
    const scOverlay = document.querySelector(".cart-overlay");
    if (scOverlay) {
        scOverlay.remove();
    }
}
  

function changePath() {
    location.pathname = '/checkout';
}    
