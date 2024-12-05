// import './styles/reset.css';
// import './styles/style.css';
const header = document.getElementById('header')
const content = document.getElementById('content')

const routerConfig = {
    '/': {
        path: '/pages/home.html',
        label: 'Homepage',
    },
    '/checkout': {
        path: '/pages/checkout.html',
        icon: 'star', // this is only for example
        hide: true, // this is only for exmaple
        label: 'Checkout'
    }
}


function registerRoute() {
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

    // but if the address is correct, we show the correct page
    if(!!routerItem){
        pathOfTheRoute = routerItem.path
    }


    renderPage(pathOfTheRoute)

}

const renderPage = async (path)=> {
    try {
        const response = await fetch(path)
        const codeOfThePathFile = await response.text()

        content.innerHTML = codeOfThePathFile
    } catch (e) {
        console.info(e.toString())
    }

}

registerRoute();