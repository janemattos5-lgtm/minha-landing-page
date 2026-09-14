const menu = document.querySelector("nav");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
});
const botaoTopo = document.querySelector("#botao-topo");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        botaoTopo.classList.add("visivel");
    } else {
        botaoTopo.classList.remove("visivel");
    }
});

botaoTopo.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
const botaoMenu = document.querySelector("#botao-menu");
const navLinks = document.querySelector(".nav-links");

botaoMenu.addEventListener("click", function() {
    navLinks.classList.toggle("aberto");
});
const numero = document.querySelector("#numero");
let contando = 0;
const alvo = 500;

const intervalo = setInterval(function() {
    contando = contando + 10;
    numero.textContent = contando;

    if (contando >= alvo) {
        numero.textContent = alvo;
        clearInterval(intervalo);
    }
}, 20);