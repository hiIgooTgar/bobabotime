// navbar responsive
const navbar = document.getElementById("click");

function showMenu() {
  click.style.right = "0";
}
function hideMenu() {
  click.style.right = "-230px";
}

// navbar jika diklik luar maka akan hilang

const navList = document.querySelector(".navbar-list");
const ham = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navList.contains(e.target)) {
    click.style.right = "-230px";
  }
});

// scrool sticky
window.addEventListener("scroll", function () {
  var navSticky = document.querySelector(".navbar");
  navSticky.classList.toggle("sticky", window.scrollY > 0);
});

// scroll delay reveal javascript

const sr = ScrollReveal({
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(" .navbar", {delay: 140, origin: "top"});
sr.reveal(" .social-media", {delay: 140, origin: "bottom"});
sr.reveal(" .home-content", {delay: 190, origin: "left"});
//sr.reveal(" .heading", {delay: 120, origin: "left"});
//sr.reveal(" .about-content", {delay: 120, origin: "top"});
//sr.reveal(" .menu-box", {delay: 100, origin: "top"});
//sr.reveal(" .title-menu", {delay: 120, origin: "top"});
//sr.reveal(" .dessert-box", {delay: 100, origin: "top"});
//sr.reveal(" .title-dessert", {delay: 120, origin: "top"});
//sr.reveal(" .contact", {delay: 120, origin: "top"});
