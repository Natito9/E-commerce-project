// This file contains modified versions of the 'calculateTotalPrice' functions originally defined in checkout.js. 

//The modifications enhance testability.

function calculateTotalPrice(cart, shippingPrice) {
    let checkoutSum = 0;
    for (let i = 0; i < cart.length; i++) {
      checkoutSum += cart[i].price * cart[i].amount;
    }
    return checkoutSum + shippingPrice;
  }
  
module.exports = {calculateTotalPrice }; 