
let cart = [];
export { cart };

//  load cart from local storage
export function loadCart() {
	
	const savedCart = localStorage.getItem("cart");
	if (savedCart) {
		cart = JSON.parse(savedCart); // Parse and load cart from localStorage
		updateCart(); 
		console.log("Current cart contents:", cart); 
	}
}

// Function to add a product to the cart
export async function addToCart(product) {
    if (!cart.some(e => e.id === product.id)) {
        cart.push(product);
        product.Amount += 1; 
     
    } else {
        cart.find(e => e.id === product.id).Amount += 1
    
    }
    updateCart();
    console.log(cart)

}


export function updateCart() {
	// Save the updated cart to localStorage
 	localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = loadCart;
