const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links-mobile");
let i = 0;
navToggle.addEventListener("click", function () {
  i % 2 === 0 ? 
    (navToggle.style.transform = 'rotate(90deg)') : (navToggle.style.transform = 'rotate(0deg)')
  i++;
  links.classList.toggle("show-links");
});
