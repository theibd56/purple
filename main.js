import './sass/_app.scss';

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header-burger");
    const header = document.querySelector("header");
    const menu = document.querySelectorAll(".header__bottom li");
    const jalousie = document.querySelector(".jalousie");
    const html = document.documentElement;

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        html.classList.toggle("lock");
        header.classList.toggle("active");
        jalousie.classList.toggle("active");
    });

    jalousie.addEventListener("click", () => {
        burger.classList.toggle("active");
        html.classList.toggle("lock");
        header.classList.toggle("active");
        jalousie.classList.toggle("active");
    });

    menu.forEach((item) => {
        item.addEventListener("click", () => {
            burger.classList.toggle("active");
            html.classList.toggle("lock");
            header.classList.toggle("active");
            jalousie.classList.toggle("active");
        });
    })
});