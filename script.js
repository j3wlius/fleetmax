"use strict";
const navMenu = document.querySelector(".mobile-menu .nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".nav-link");

// open the nav menu when hamburger icon is clicked
hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.add("open");
});

// close the nav menu when x icon is clicked
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("open");
});

// close the nav menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// add active class to the clicked nav link and remove it from other nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

const carouselImages = document.querySelectorAll(".carousel-images img");
const carouselNextBtn = document.querySelector(".next-button");
const carouselPrevBtn = document.querySelector(".prev-button");

let counter = 0;

// Next button
function nextImageSlide() {
  carouselImages[counter].style.animation = "next1 0.5s forwards";

  counter >= carouselImages.length - 1 ? (counter = 0) : counter++;

  carouselImages[counter].style.animation = "next2 0.5s forwards";
}

carouselNextBtn.addEventListener("click", nextImageSlide);

// Prev Button
function prevImageSlide() {
  carouselImages[counter].style.animation = "prev1 0.5s forwards";

  counter <= 0 ? (counter = carouselImages.length - 1) : counter--;

  carouselImages[counter].style.animation = "prev2 0.5s forwards";
}

carouselPrevBtn.addEventListener("click", prevImageSlide);

// Auto slides
function autoSlides() {
  setSlideTime = setInterval(slide, 2500);
  function slide() {
    nextImageSlide();
  }
}

autoSlides();

// Stop auto slide when mouse is over
const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.addEventListener("mouseover", () => {
  clearInterval(setSlideTime);
});

// Resume auto slide when mouse is out
carouselContainer.addEventListener("mouseout", autoSlides);

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Function to handle scroll event
function revealOnScroll() {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add("visible");
      section.classList.remove("hidden");
    }
  });
}

// Attach scroll event listener
window.addEventListener("scroll", revealOnScroll);

// Initial check to see if sections are already in view on page load
document.addEventListener("DOMContentLoaded", revealOnScroll);