const btnMenu = document.querySelector(".menu-opener");
const mobileMenu = document.querySelector(".header-menu-mobile");

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("open");
    mobileMenu.classList.toggle("active");
})