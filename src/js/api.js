export async function fetchProducts() {
    //fetch all the products from API
    const apiUrl = 'https://fakestoreapi.com/products';

    try {
        const response = await fetch(apiUrl);
        const products = await response.json();

    //Add the key "Amount" to the API objects 
        const key = "Amount";
        for (let i = 0; i < products.length; i++){
            products[i][key] = 0;
        }
        return products;

    } catch(error){
        console.error('Error fetching products:',error);
        return [];
    }
    
};