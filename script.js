"use strict";
const navMenu = document.querySelector(".mobile-menu .nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".nav-link");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});
