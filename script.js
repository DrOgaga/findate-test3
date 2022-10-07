const hamburger = document.querySelector(".bi");
const navMenu = document.querySelector(".menu-bar");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})