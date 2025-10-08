const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navButtons = document.getElementById("nav-buttons");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navButtons.classList.toggle("show");
});

