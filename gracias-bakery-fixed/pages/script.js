// ==========================================================
// GRACIAS BAKERY - script.js
// Shared JavaScript for all pages
// ==========================================================

// Mobile menu: show/hide the links when the button is pressed
const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open"); // add or remove the class "open"
  menuButton.setAttribute("aria-expanded", isOpen); // for screen readers
});
