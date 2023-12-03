const btnMenu = document.querySelector(".menu-opener");
const mobileMenu = document.querySelector(".header-menu-mobile");
const btnUp = document.querySelector("#btnUp");

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("open");
    mobileMenu.classList.toggle("active");
})

btnUp.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})