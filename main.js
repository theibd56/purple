import './sass/_app.scss';

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header-burger");
    const header = document.querySelector("header");
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
});