const content = document.getElementById('content')
import { loadHomeScreen } from './prod-listing.js';
import { loadShoppingCart, changePath } from './shop-cart.js'
import { loadCart } from './addToCart.js';
import { renderCart } from './checkout.js';



const routerConfig = {
    '/': {
        path: '/pages/home.html', //the html file related to the path
        loadFunction: () => {
            loadHomeScreen(); 
            loadShoppingCart(); 
            loadCart();
        }
    },
    '/checkout': {
        path: '/pages/checkout.html',//the html file related to the path
        loadFunction: () => {
            renderCart()
        } 
    }
}


const renderPage = async (path,loader)=> {
    const content = document.querySelector("#content");
    try {
        // copy the html codes from the path
        const response = await fetch(path)
        const codeOfThePathFile = await response.text()
     
       
        content.innerHTML = codeOfThePathFile
        
        // if the route has a loader function, call the loader function
        if(!!loader){
            loader()
        }
    } catch (error) {
        console.info(error.toString())
        console.log("catching error")
    }
     

}

export function registerRoute() {
    console.log("RegisterRoute func");

  
    const route = location.pathname;
	const routerItem = routerConfig[route];
	let pathOfTheRoute = "/";
	let loader = null;

	if (!!routerItem) {
		pathOfTheRoute = routerItem.path;
		loader = routerItem.loadFunction;
	}

	renderPage(pathOfTheRoute, loader);
}
