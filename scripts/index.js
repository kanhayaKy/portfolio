var ul = document.querySelector("ul");
function openNav() {
  ul.classList.toggle("open");
}

let navLinks = document.querySelectorAll(".nav-link");

const activateLink = (event) => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  event.target.classList.add("active");
};

navLinks.forEach((link) => {
    link.addEventListener("click", activateLink);
  });