const content = document.getElementById('content')
import { loadProducts } from './prod-listing.js';


const routerConfig = {
    '/': {
        path: '/pages/home.html', //the html file related to the path
        loadFunction: loadProducts // the loader function related to the path
    },
    '/checkout': {
        path: '/pages/checkout.html',//the html file related to the path
        loadFunction: null // the loader function related to the path
    }
}


const renderPage = async (path,loader)=> {
    try {
        // copy the html codes from the path
        const response = await fetch(path)
        const codeOfThePathFile = await response.text()

        content.innerHTML = codeOfThePathFile

        // if the route has a loader function, call the loader function
        if(!!loader){
            loader()
        }
    } catch (e) {
        console.info(e.toString())
    }

}

export function registerRoute() {
    // we should see what request comes
    // this line will find what is the path, for example "/checkout"
    const route = location.pathname;


    // go and show the path of the route to the user
    // for example if the route is /checkout, `routerConfig[route]` will find the whole configuration for the '/checkout'
    // in this example
    // '/checkout': {
    //     path: '/src/pages/checkout.html',
    //     icon: 'star',
    //     hide: true,
    //     label: 'Checkout'
    // }

    // in our example, if the route be '/checkout', routerItem.path should be '/src/pages/checkout.html'
    const routerItem = routerConfig[route]

    // if the user send the correct addresses, we can find it
    // if if the user sends a dummy address (like /dummy) we should show a notfound page or redirect it to home
    // so by default all requests goes to home
    let pathOfTheRoute = '/'

    // also, each page might have a loader function [like loadProducts],
    // we want to know is there any loader for the path or not
    // by default we will set the path loader to null to make sure if that path is ready
    let loader = null

    // if the address is correct, we show the related html file or loader function
    if(!!routerItem){
        pathOfTheRoute = routerItem.path
        loader = routerItem.loadFunction
    }


    renderPage(pathOfTheRoute,loader)
}
