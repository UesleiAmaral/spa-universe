import { Router } from "./router.js";
const router = new Router();
router.add('/', "/pages/home.html");
router.add("/o-universo", "/pages/o-universo.html");
router.add("/exploracao", "/pages/exploracao.html");

const menuHamburger = document.getElementById('checkbox-menu');
const menu = document.querySelector('.nav-bar-hamburguer');

router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();

menuHamburger.addEventListener('click', () => {

  menu.classList.toggle('display-none');

});


