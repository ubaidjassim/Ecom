let toggleBTN = document.querySelector(".toggleMenu")
let sideNav = document.querySelector(".side-nav")
let crossBTN = document.querySelector(".cross")


toggleBTN.addEventListener("click", () => {
    sideNav.style.left = "0"
})
crossBTN.addEventListener("click", () => {
    sideNav.style.left = "-60%"
})

let search = document.querySelector("#search")
let productContainer = document.querySelector(".products")
let productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", (event) => {
    let enteredValue = event.target.value.toUpperCase()

    for (let count = 0; count < productList.length; count++) {

        let productName = productList[count].querySelector("p").textContent.toUpperCase()

        if (productName.indexOf(enteredValue) < 0) {
            productList[count].style.display = "none"
        } else {
            productList[count].style.display = "block"
        }
    }
})