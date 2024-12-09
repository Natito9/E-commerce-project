const { calculateTotal } = require('./price-calculation');

describe('calculateTotal', () => {
  it('should calculate the total price correctly', () => {
    const cart = [
      { price: 19.99, amount: 2 },
      { price: 49.99, amount: 1 },
    ];
    const shippingCost = 50;
    const total = calculateTotal(cart, shippingCost);
    expect(total).toBe(19.99 * 2 + 49.99 + shippingCost);
  });

  it('should handle empty cart', () => {
    const cart = [];
    const shippingCost = 50;
    const total = calculateTotal(cart, shippingCost);
    expect(total).toBe(shippingCost);
  });

  it('should handle single item in cart', () => {
    const cart = [{ price: 19.99, amount: 1 }];
    const shippingCost = 50;
    const total = calculateTotal(cart, shippingCost);
    expect(total).toBe(19.99 + shippingCost);
  });
});