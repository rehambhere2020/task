let toggle = document.getElementById("nav-toggle");
let menu = document.getElementById("nav-menu");
let close = document.getElementById("nav-close");
toggle.addEventListener("click", () => {
  menu.classList.add("show-menu");
});

close.addEventListener("click", () => {
  menu.classList.remove("show-menu");
});
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
