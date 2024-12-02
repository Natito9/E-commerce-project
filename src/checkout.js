const whiteShirt = {
    title: "White Shirt",
    price: 150,
    img: "https://tse4.mm.bing.net/th?id=OIP.sPKwzWU7SRDhgGDV_xjE3wAAAA&pid=Api"
}

const blackPants = {
    title: "Black Pants",
    price: 400,
    img: "https://tse1.mm.bing.net/th?id=OIP.mTvA62qA5btxjDX6NYlh-QHaJa&pid=Api"
}
let items = [whiteShirt, blackPants, blackPants]

const priceEL = document.querySelector("#checkout-total-price")
const cartEl = document.querySelector("#checkout-cart")

function displayProducts() {
    for (i = 0; i < items.length; i++){
        console.log(items[i].title)
        const item = document.createElement("div")
        item.innerHTML = `
        <h2>${items[i].title}</h2>
        <h2>${items[i].price}kr</h2>
        <img src="${items[i].img}" class="checkout-product-img">
        `
        document.querySelector("#checkout-items").appendChild(item)
    }
    cartEl.innerText+= ` ${items.length} items`
    
}

displayProducts()