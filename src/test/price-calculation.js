function calculateTotal(cart, shippingCost) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].amount;
    }
    return total + shippingCost;
  }
  
function calculateTotalPrice(cart) {
    const shippingCost = document.querySelector("#checkout-shipping").value;
    const total = calculateTotal(cart, shippingCost);
    totalEL.textContent = `Total: ${total}`;
    shippingEl.textContent = `Shipping: ${shippingCost}kr`;
    if (cart.length === 0) {
      orderSummary.innerHTML = `<h1> You don't have any items in your cart:( </h1>`;
      document.querySelector("#checkout-form-section").innerHTML = "";
    }
  }
  
module.exports = { calculateTotalPrice, calculateTotal };