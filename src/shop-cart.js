// document.addEventListener("DOMContentLoaded", function() {
//     const openCartButton = document.querySelector("#sc-open-button");
//     // const closeCartButton = document.querySelector("#sc-close-button");

//     openCartButton.addEventListener("click", openCart);
//     // closeCartButton.addEventListener("click", closeCart);
    
// });


// const shoppingCartPopup = document.querySelector("#shopping-cart-popup");

// function openCart(){
//     shoppingCartPopup.style.display = "block";
// }


// //array 
// function cartProductsArray() {
//     const cartProducts = [];
//     // Example of adding products
//     cartProducts.push({ id: 1, name: 'Product 1', price: 10 });
//     cartProducts.push({ id: 2, name: 'Product 2', price: 15 });
//     // Add more products as needed
//     return cartProducts;
// }

// const cart = cartProductsArray();
// console.log(cart);



// // Optional: close the cart when clicking outside of the popup content


// //create elements for cart  structure
// export function displayCartContent (cartProducts){
//     const contentDiv = document.querySelector("#content");
//     contentDiv.innerHTML = ''; 

//     // create shopping cart section
//     const cartSection = document.createElement("section");
//     cartSection.className = "shopping-cart-section";
//     cartSection.id = "shopping-cart-popup";

//     // create header container
//     const headerContainer = document.createElement("div");
//     headerContainer.className = "sc-header-container";
//     headerContainer.innerHTML = `
//         <div class="sc-number-items-container">
//             <h2>Cart</h2>
//              <p>(2 items)</p>
//         </div>
//         <div class="sc-close-tab-button-container">
//             <button class="sc-close-tab-button">x</button>
//         </div>
//     `;
//     cartSection.appendChild(headerContainer);

//       // create line separating the header
//     const headerLine = document.createElement("hr");
//     headerLine.className = 'sc-header-line';
//     cartSection.appendChild(headerLine);
// }

document.addEventListener("DOMContentLoaded", function() {
    // Select the button to open the popup
    const openCartButton = document.querySelector("#sc-open-button");

    // Add event listener to open the pop-up when the button is clicked
    openCartButton.addEventListener("click", openCart);
});

function openCart() {
    // Create the overlay (background) element and add the CSS class
    const overlay = document.createElement("div");
    overlay.classList.add("cart-overlay");

    // Create the dialog box (pop-up) element and add the CSS class
    const dialog = document.createElement("div");
    dialog.classList.add("shopping-cart-section");

    // Create the text content
    const text = document.createElement("p");
    text.textContent = "im the cart";
    dialog.appendChild(text);

    // Create the close button and add a CSS class
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.classList.add("popup-close-button");
    closeButton.addEventListener("click", closePopup);

    // Append the close button to the dialog
    dialog.appendChild(closeButton);

    // Append the dialog to the overlay
    overlay.appendChild(dialog);

    // Append the overlay to the body
    document.body.appendChild(overlay);
}

function closePopup() {
    // Remove the overlay (which will also remove the dialog)
    const overlay = document.querySelector(".cart-overlay");
    if (overlay) {
        overlay.remove();
    }
}







//control the amount with parameter (amount)