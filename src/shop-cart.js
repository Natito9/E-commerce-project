document.addEventListener("DOMContentLoaded", function() {

    const openCartButton = document.querySelector("#sc-open-button");
    openCartButton.addEventListener("click", openCart);
});


function openCart() {
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

    //p
    const scNumItems = document.createElement ("p")
    scNumItems.textContent = "n° items";
    scNumberItems.appendChild(scNumItems);

    //button container
    const scCloseButtonContainer = document.createElement ("div");
    scCloseButtonContainer.classList.add("sc-close-button-container")
    scHeader.appendChild(scCloseButtonContainer);

    //close button
    const scCloseButton = document.createElement("button");
    scCloseButton.textContent = "x";
    scCloseButton.classList.add("sc-close-button");
    scCloseButton.addEventListener("click", closeCart);
    scCloseButtonContainer.appendChild(scCloseButton);

    const scLineHeader = document.createElement("hr");
    scLineHeader.classList.add("sc-header-line");
    scSection.appendChild(scLineHeader);

    //display the products container
    const scDisplayProductsContainer =document.createElement("div");
    scDisplayProductsContainer.classList.add("sc-products-display-container");
    scSection.appendChild(scDisplayProductsContainer);

    //products to be attachet to container!!!

    
    //Subtotal chekout container
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
    // scSubtotalPrice.classList.add("")
    scSubtotalPrice.textContent = "120 SEK";
    scSubtotalContainer.appendChild(scSubtotalPrice);

    //tax text
    const scSubtotalTaxText = document.createElement("p")
    scSubtotalTaxText.classList.add("sc-subtotal-tax-text")
    scSubtotalTaxText.textContent = "Taxes and shipping are calculated at checkout";
    scSubtotalCheckoutContainer.appendChild(scSubtotalTaxText);

    //checkout button container
    const scCheckoutButtonContainer=document.createElement("div");
    scCheckoutButtonContainer.classList.add("sc-checkout-button-container");
    scSection.appendChild(scCheckoutButtonContainer);

    //go to checkout button
    const scCheckoutButton=document.createElement("button");
    scCheckoutButton.classList.add("sc-go-to-checkout-button");
    scCheckoutButton.textContent = "Checkout";
    scCheckoutButtonContainer.appendChild(scCheckoutButton);




}


function closeCart() {
    // Remove the overlay (which will also remove the section)
    const scOverlay = document.querySelector(".cart-overlay");
    if (scOverlay) {
        scOverlay.remove();
    }
}







//control the amount with parameter (amount)