// Mock the fetchProducts function before importing the module being tested
jest.mock('../js/api', () => ({
  fetchProducts: async () => [
    { category: 'clothing', title: 'T-Shirt', price: 19.99, id: 1 },
    { category: 'accessories', title: 'Watch', price: 49.99, id: 2 },
    { category: 'clothing', title: 'Dress', price: 29.99, id: 3 },
    { category: 'electronics', title: 'Laptop', price: 999.99, id: 4 },
  ],
}));

const { fetchProductsCategories, setupCategoryFilter } = require('./filter-categories'); 

describe('fetchProductsCategories', () => {
  it('should return unique categories', async () => {
    const categories = await fetchProductsCategories();
    expect(categories).toEqual(['clothing', 'accessories', 'electronics']);
  });
});

describe('setupCategoryFilter', () => {
  it('should filter products by category when "clothing" is selected', async () => {
    const handleChange = await setupCategoryFilter();

    // Simulate a change event for selecting "clothing"
    const mockEvent = { target: { value: 'clothing' } };
    
    const filteredProducts = handleChange(mockEvent); // Call with mock event

    // Verify that only clothing products are returned
    expect(filteredProducts).toEqual([
      { category: 'clothing', title: 'T-Shirt', price: 19.99, id: 1 },
      { category: 'clothing', title: 'Dress', price: 29.99, id: 3 }
    ]);
  });

  it('should return all products when "all" is selected', async () => {
    const handleChange = await setupCategoryFilter();

    const mockEvent = { target: { value: 'all' } };
    
    const filteredProducts = handleChange(mockEvent); 

    expect(filteredProducts).toEqual([
      { category: 'clothing', title: 'T-Shirt', price: 19.99, id: 1 },
      { category: 'accessories', title: 'Watch', price: 49.99, id: 2 },
      { category: 'clothing', title: 'Dress', price: 29.99, id: 3 },
      { category: 'electronics', title: 'Laptop', price: 999.99, id: 4 }
    ]);
  });
});