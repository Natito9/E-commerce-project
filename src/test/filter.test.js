  // Mock the fetchProducts function before importing the module being tested
  jest.mock('../js/api', () => ({
    fetchProducts: async () => [
      { category: 'clothing', title: 'T-Shirt', image: 'https://example.com/t-shirt.jpg', price: 19.99, id: 1 },
      { category: 'accessories', title: 'Watch', image: 'https://example.com/watch.jpg', price: 49.99, id: 2 },
      { category: 'clothing', title: 'Dress', image: 'https://example.com/dress.jpg', price: 29.99, id: 3 },
      { category: 'electronics', title: 'Laptop', image: 'https://example.com/laptop.jpg', price: 999.99, id: 4 },
    ],
  }));
  
  const { fetchProductsCategories} = require('./filters-for-test');
  
  describe('fetchProductsCategories', () => {
    it('should return unique categories', async () => {
      const categories = await fetchProductsCategories();
      expect(categories).toEqual(['clothing', 'accessories', 'electronics']);
    });
  });