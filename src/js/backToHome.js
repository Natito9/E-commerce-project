

export function backToHome() {    
    document.querySelector("#store-name").addEventListener("click", () => {
        changePath()
    })
}

function changePath () {
    location.pathname = '/'
}