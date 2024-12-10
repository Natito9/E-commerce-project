const { calculateTotalPrice } = require('./price-calculation');

describe('calculateTotalPrice', () => {
  it('should calculate the total price correctly', () => {
    const cart = [
      { price: 19.99, amount: 2 },
      { price: 49.99, amount: 1 },
    ];
    const shippingPrice = 50;
    const checkoutSum = calculateTotalPrice(cart, shippingPrice);
    expect(checkoutSum).toBe(19.99 * 2 + 49.99 + shippingPrice);
  });

  it('should handle empty cart', () => {
    const cart = [];
    const shippingPrice = 50;
    const checkoutSum = calculateTotalPrice(cart, shippingPrice);
    expect(checkoutSum).toBe(shippingPrice);
  });

  it('should handle single item in cart', () => {
    const cart = [{ price: 19.99, amount: 1 }];
    const shippingPrice = 50;
    const checkoutSum = calculateTotalPrice(cart, shippingPrice);
    expect(checkoutSum).toBe(19.99 + shippingPrice);
  });
});