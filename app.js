let toggleBTN = document.querySelector(".toggleMenu")
let sideNav = document.querySelector(".side-nav")
let crossBTN = document.querySelector(".cross")


toggleBTN.addEventListener("click", () => {
    sideNav.style.left = "0"
})
crossBTN.addEventListener("click", () => {
    sideNav.style.left = "-60%"
})

